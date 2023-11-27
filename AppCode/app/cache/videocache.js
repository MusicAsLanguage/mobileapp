import * as FileSystem from "expo-file-system";
import * as SecureStore from "expo-secure-store";

const cacheDir = `${FileSystem.cacheDirectory}VideoCace/`;

const callback = (progress) => {

    const percentage = progress.totalBytesWritten / progress.totalBytesExpectedToWrite;
    //console.log(percentage);
}

const clearVideoCaches = async () => {

    const videos = await FileSystem.readDirectoryAsync(cacheDir);
    const promises = videos.map(async (video) => {
        await FileSystem.deleteAsync(cacheDir + video);
    })

    return await Promise.all(promises);
}

const deleteVideoCache = async (filename) => {
    await FileSystem.deleteAsync(cacheDir + filename);
}

const downloadToCache = async (uri) => {

    if (uri == "") return;

    // check if chaceDir already exists
    const dirInfo = await FileSystem.getInfoAsync(cacheDir);
    if (!dirInfo.exists) {
        await FileSystem.makeDirectoryAsync(cacheDir, { intermediates: true });
    }

    const uriFileName = uri.substring(uri.lastIndexOf("/") + 1);
    const cacheFileName = `${cacheDir}${uriFileName}`;

    // const downloadResumeable = FileSystem.createDownloadResumable(
    //     uri,
    //     cacheFileName,
    //     {},
    //     callback,
    // )

    try {
        console.log(`source: ${uri}\ndestination: ${cacheFileName}`);
        //const downloaded = await downloadResumeable.downloadAsync();
        const downloaded = await FileSystem.downloadAsync(uri, cacheFileName, {})

        if (downloaded.status == 200) {
            return downloaded.uri;
        } else {
            return null;
        }

    } catch (error) {
        console.warn("Download failed ", error);
    }
}

const getLocalCacheDirectory = () => {
    return cacheDir;
}

const getLocalVideoCache = async (uri) => {

    if (uri == "") {
        console.warn("no uri specified to cache");
        return;
    }

    const uriFileName = uri.substring(uri.lastIndexOf("/") + 1);
    const cacheFileName = `${cacheDir}${uriFileName}`;

    // if cache version exists already do not download again
    const fileInfo = await FileSystem.getInfoAsync(cacheFileName);
    if (fileInfo.exists) {
        console.log("file exists");
        console.log(cacheFileName);
        return cacheFileName;
    }

    return await Promise.all(downloadToCache(uri));
}

const getLocalVideoCaches = async () => {

    const videos = await FileSystem.readDirectoryAsync(cacheDir);
    const promises = videos.map(async (video) => {
        return { name: video };
    })

    let cachedVideos = await Promise.all(promises);
    return cachedVideos;
}

export {
    clearVideoCaches,
    deleteVideoCache,
    getLocalVideoCache,
    getLocalCacheDirectory,
    getLocalVideoCaches,
};