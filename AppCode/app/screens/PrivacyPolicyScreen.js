import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';

import Screen from '../components/Screen';
import colors from '../config/colors';
import routes from "../navigation/routes";
import AppText from "../components/AppText";
import BackButton from "../components/BackButton";
import uistrings from '../config/uistrings';


function PrivacyPolicyScreen({ navigation }) {
    return (
        <Screen style={styles.screen}>
            <BackButton onPress={() => navigation.navigate(routes.SETTINGS)} />
            <AppText style={styles.screenTitle}>{uistrings.PrivacyPolicy}</AppText>
            <ScrollView style={styles.scrollArea}>
            <AppText style={styles.sectionTitle}>
            MusicAsLanguage Privacy Policy
            </AppText>
            <AppText style={styles.detailsText}>
            Effective Date: June 1, 2021{'\n'}{'\n'}
            The Music Project of Northshore, doing business as MusicAsLanugage (collectively, "MAL", "we", "our", or "us") is deeply committed to protecting the privacy of our users' personal information. This MAL Privacy Policy ("Privacy Policy") applies to the Music Project website (https://www.musicprojectnorthshore.com/; our mobile website; and any other web-based platforms (collectively, the "Websites") and governs our data collection, processing and usage. Access to and use of the Websites, and the services provided on the Website (collectively, the "Service"), will be subject to this Privacy Policy as set forth below.{'\n'}{'\n'}
            We offer several ways to use the Services offered on our Websites. MAL provides both a limited service ("Individual Edition") and two versions of a licensed service made available through your school ("School Editions"). Collectively, the Individual Edition and the School Editions are considered the "Services". The School Editions are available as a free, ad-supported version ("School Edition Basic") and a fee-based version without ads ("School Edition Pro"). The personal information that we collect, use, share, and disclose will depend on which of the Services you use and how you choose to use them.{'\n'}{'\n'}
            PLEASE NOTE: Our Websites are general audience websites through which we do not knowingly collect information from children located in the United States under the age of 13 and children located in the European Union under the age of 16 (collectively, "Children" and each, a "Child"). However, portions of the Websites and certain Services, including, but not limited to, School Edition Basic and School Edition Pro, contain teaching and learning resources are designed for students who may be Children. Students may access the Websites directed to Children only after their teacher, school, or school district administrator has entered into an agreement with MAL. The Websites that are directed to Children follow our Children's Privacy Policy, provided below and incorporated within this Privacy Policy. In addition, our use of student information is described in the "Information We Collect" section, below.
            </AppText>
            <AppText style={styles.sectionTitle}>
            Information We Collect
            </AppText>
            <AppText style={styles.detailsText}>
            We may collect information directly from users, from students, or from school officials. In addition, we may use "cookies" and other tracking mechanisms to collect information from the users directly from the browsers.{'\n'}{'\n'}
            We collect information from you directly when you sign up for an account, use one of the Services, or choose to save information about your use of our Services. The following is the information collected, processed and stored through our Websites.{'\n'}{'\n'}
            When you create an account on our Websites, we may collect the following information:{'\n'}{'\n'}
            Basic Account Information for Educational Account Holders. You may establish a School or School District account with MAL by providing us with certain information about you, such as: {'\n'}{'\n'}
            Your Name, Your Email Address, Your Address, Your Phone Number, Other relevant contact information, Your School or Education Affiliation, Your Payment Information{'\n'}{'\n'}
            Basic Account Information for Individual Users or Teachers. You may establish an Individual Edition account or your information may be provided to MAL by a School or School District, such as: Your Name, Your Email Address, Your School or Education Affiliation{'\n'}{'\n'}
            MAL collects and processes this basic account information in order to provide you with an account, access to the Services, and communicate with you regarding our Services. An account is required to save and track your progress on our Services. However, you can use our Individual Edition without establishing an account; but, you cannot save and track your progress.{'\n'}{'\n'}
            Performance Information. If you establish an account with us and choose to save your progress on our Services, we will collect information about your performance on our Services. If you use the Individual Edition and do not establish an account, we will use a cookie (described below) to collect information about your performance. This will enable us to return you to the correct webpage when you return to our sites. We will delete data we collect through the cookie within two (2) months after you last use the Individual Edition.{'\n'}{'\n'}
            Social Media Account Information. You also can establish an account to use our Services by logging in through social networks and other services, such as Microsoft Single Sign-On, Facebook or Google+. If you do, we may collect certain personal information through the platform used to sign in, including your full name and email address.{'\n'}{'\n'}
            Account Information about school officials and student users. After a teacher, school, or school district has entered into an agreement with MAL, designated school officials can register students and/or the school to use either version of the School Edition. When school officials register Students, we collect basic account information (name, email address, and password) about the students, as well as the students' grade level. We also may collect personal information about the school official, such as the school official's name, email address, password, phone number, name of school and district. The teacher, school, or school district is required to obtain the consent of a parent or legal guardian of the Child before providing a Child's personal information. (Please see our "Children's Privacy Policy," below, for information about our collection and use of information from children under 16.){'\n'}{'\n'}
            Other Information. Regardless of whether you establish an account with us, we may collect certain information from you when you visit our Websites or use our Services so that we can maintain our Services and recognize you when you return to our Websites. In addition, as explained in more detail below, the Individual Edition and School Edition Basic use an advertising service provided by Google Analytics that will collect information in order to target ads to you. Such information may include your IP address, the identity of your Internet Service Provider, browser type, operating system, the referring web page, and pages visited while on our Websites.
            </AppText>
            <AppText style={styles.sectionTitle}>
            Cookies
            </AppText>
            <AppText style={styles.detailsText}>
            Our Websites may use "cookies" and other tracking mechanisms to collect information about you when you visit our Websites. Insofar as those cookies are not strictly necessary for the provision of and our affiliated websites, we ask you to consent to our use of cookies when you first visit our website.{'\n'}
            About cookies. A cookie is a file containing an identifier (a string of letters and numbers) that is sent by a web server to a web browser and is stored by the browser. The identifier is then sent back to the server each time the browser requests a page from the server.{'\n'}{'\n'}
            Cookies may be either "persistent" cookies or "session" cookies: a persistent cookie will be stored by a web browser and will remain valid until its set expiry date, unless deleted by the user before the expiry date; a session cookie, on the other hand, will expire at the end of the user session, when the web browser is closed.{'\n'}{'\n'}
            Cookies do not typically contain any information that personally identifies a user, but personal information that we store about you may be linked to the information stored in and obtained from cookies.{'\n'}{'\n'}
            Cookies that We Use. As explained in more detail below, depending on which version of our Services you use, MAL and third-party advertisers may send one or more cookies to your browser to help customize your experience on our Websites or Services or to provide you with ads that may be of interest to you.{'\n'}{'\n'}
            We use cookies for the following purposes:{'\n'}
            • Authentication and Personalization - we use cookies to identify you when you visit our Websites and as you navigate our Websites and Services and to store information about your preferences and to personalize our Websites and Services for you.{'\n'}
            • Security - we use cookies as an element of the security measures used to protect user accounts, including preventing fraudulent use of login credentials, and to protect our Websites and Services generally.{'\n'}
            • Advertising - we use cookies to help us to display content that will be relevant to you.{'\n'}
            • Analysis - we use cookies to help us to analyze the use and performance of our Websites and Services.{'\n'}{'\n'}
            The Music Project and third party cookies you may encounter on our Websites include, but are not limited to:{'\n'}
            • www.musicprojectnorthshore.com/ (website navigation, security){'\n'}
            • www.google.com (use tracking and content interests){'\n'}
            • www.doubleclick.net (use tracking and content interests){'\n'}{'\n'}
            You may review the cookies in use by third-party service providers at any time by viewing site information from your browser. This is typically displayed to the left of in the address bar of your browser.{'\n'}{'\n'}
            Managing cookies. Most browsers allow you to refuse to accept cookies and to delete cookies. The methods for doing so vary from browser to browser, and from version to version. Blocking all cookies will have a negative impact upon the usability of many websites.{'\n'}{'\n'}
            Strictly Necessary Cookies:{'\n'}{'\n'}
            MAL's Websites use cookies that are strictly necessary to the provision of the Services. When a user initially visits the Websites, MAL uses a generic cookie based on the user's geographic location that does not individually identify the user. When a user interacts with the Services, a new cookie is generated that tracks a user's Internet Protocol ("IP") address. If a user creates an account, personal information provided by that user will be collected and associated with that user.{'\n'}{'\n'}
            Additionally, MAL uses cookies provided by Google and Doubleclick (as described below) that are necessary in order to provide the Services. For the Individual Edition and School Edition Basic, Google AdSense is necessary in order to provide the Services for no charge.{'\n'}{'\n'}
            Please note that some of MAL's features may not function properly when cookies are disabled or removed.{'\n'}{'\n'}
            "Do Not Track". Some browsers have incorporated "Do Not Track" mechanisms. Most of these mechanisms, when turned on, send a signal to the website or online service indicating that the user does not wish to be tracked online. Our sites do not collect and store personal information about users' online activities over time and across third-party websites or online services. Our Websites only collect personal information related to a user if the user creates an account with MAL. MAL does retain de-identified data in order to maintain and improve the Services.{'\n'}{'\n'}
            Therefore, "do not track" signals transmitted from web browsers do not apply to our Websites, and we do not alter any of our data collection and use practices upon receipt of such a signal. For more information about Do Not Track mechanisms, see http://allaboutdnt.com/.
            </AppText>
            <AppText style={styles.sectionTitle}>
            How We Use and Share Information
            </AppText>
            <AppText style={styles.detailsText}>
            We use the information described above to provide our Services to you, to communicate with you, and to manage and improve our Websites and Services.{'\n'}{'\n'}
            Necessary Uses and Sharing of Your Information. When you create an account on our Services, you are given the option to consent to the use of your information as described in this Privacy Policy. Certain uses of your information are necessary in order to provide the Services to you. These include your name and contact information to create and maintain an account and Google Analytics (as described below). If you do not consent to the use of this information, we are unable to provide the Services to You.{'\n'}{'\n'}
            Other Uses and Sharing of Your Information. MAL uses your information to provide targeted advertisements to you when using the Individual Edition and School Edition Basic versions. When you create a paid account, your personal information will not be provided to Advertisers (as described below). And, except as provided below, we will not sell, share, or disclose information we collect from or about you.{'\n'}{'\n'}
            Google Analytics. Our Websites use Google Analytics, a web analytics service provided by Google, Inc. ("Google"), that collects information about how visitors use the Websites. Google Analytics places a cookie on your web browser to identify you as a unique user. Only Google can use the cookie and access the information associated with the cookie. Google Analytics collects information only regarding the domain/IP address, or device identifier, of visitors to the Websites. It does not collect names or other identifying information.{'\n'}{'\n'}
            We use the information Google Analytics provides to us only to improve the Websites and Services. We do not combine the information that Google Analytics collects with any personally identifiable information. The Google Analytics Terms of Use and the Google Privacy Policy restrict Google's ability to use and share information collected by Google Analytics about visitors to the Websites. You can prevent Google Analytics from recognizing your return visits to the sites by disabling cookies on your browser or by installing the Google Analytics browser add-on. Please refer to your browser settings for additional information on disabling cookies.{'\n'}{'\n'}
            Advertisers. We provide advertisers with aggregated, de-identified information about the demographics and usage patterns of our users. In addition, we use Google AdSense to serve ads to users of our Individual Edition and the School Edition Basic. Google and third parties that advertise through Google may place and read cookies on your browser or use web beacons to collect information through an ad appearing on our Websites. These third parties, including advertisers, may collect, process, and store information, potentially including personal information, about your activities over time and across different Websites when you use the Services.{'\n'}{'\n'}
            Any advertisements served by Google may be controlled using the DoubleClick cookie. These cookies allow Google to display ads based on your visits to this sites and other sites that use Google advertising services. However, we do not allow Google AdSense or any other service to target ads to Children using School Edition Basic.{'\n'}{'\n'}
            Users may opt out of the use of the DoubleClick cookie by visiting Ads Settings. Deleting cookies can affect how you interact with our Websites as well as other websites. In addition, deleting cookies does not mean that you are permanently opted out of all advertising programs. Unless you set your browser to block cookies, cookies can be added to your browser the next time you visit a website that uses them. Please see the privacy policy for Google AdSense for additional information.{'\n'}{'\n'}
            You can learn more about targeted advertising by visiting http://www.aboutads.info/choices/, which provides information regarding targeted advertising and offers an "opt-out" by participating companies in the DAA Self-Regulatory Program. You may also opt out of tracking and receiving tailored advertisements on your mobile device by some mobile advertising companies and other similar entities by downloading the App Choices app at www.aboutads.info/appchoices. Please note that opting out through these mechanisms does not opt you out of being served advertising. You will continue to receive generic ads while visiting the sites and elsewhere online.{'\n'}{'\n'}
            Service Providers. We may use certain third parties and contractors ("Service Providers") to assist us in providing and maintaining our Services. MAL uses a Service Provider to store its data. Other than the storage of that data, MAL does not provide personal information to Service Providers.{'\n'}{'\n'}
            Schools and School Districts. If you use either version of our School Edition, we may disclose personal data about you and about your performance on our Websites to your school and school district. For information regarding the use of any information provided by MAL to your school or school district, please contact a representative of your school or school district. We also may use aggregated, de-identified demographic and performance data to market our Services to other schools and school districts.{'\n'}{'\n'}
            Additional Disclosures. We also may disclose personal information about you with your permission, as required by law, as necessary to enforce our Terms of Service or Privacy Policy, to investigate or defend against third-party claims or allegations, to protect the security and integrity of our Services and property, and to protect our rights or personal safety and that of our users or others.
            </AppText>
            <AppText style={styles.sectionTitle}>
            How We Protect Your Personal Information
            </AppText>
            <AppText style={styles.detailsText}>
            We take into account the state of the art, the costs of implementation and the nature, scope, context and purposes of processing as well as the risk of varying likelihood and severity for the rights and freedoms of natural persons, and implement appropriate technical, physical and organisational measures to ensure an appropriate level of security to protect the personal information that we collect and process, both while in transit and while in storage. No method of transmission over the Internet or method of electronic storage is 100% secure, however. Therefore, while we use reasonable security safeguards to protect your personal information, we cannot guarantee absolute security.
            </AppText>
            <AppText style={styles.sectionTitle}>
            Children's Information
            </AppText>
            <AppText style={styles.detailsText}>
            Children located in the United States under the age of 13 and children located in the European Union under the age of 16 are not permitted to use the Individual Edition without the consent of a parent or legal guardian. If you become aware that your Child has provided us with personal information in connection with the Individual Edition without your consent, please contact us at music@sf-ns.org. If we become aware that a Child has provided us with personal information in connection with the Individual Edition without the parents' consent or consent of a legal guardian, we will take steps to delete such information and terminate the Child's account.
            </AppText>
            <AppText style={styles.sectionTitle}>
            Children's Privacy Policy
            </AppText>
            <AppText style={styles.detailsText}>
            While most of the Websites are general audience websites that do not knowingly collect information from children located in the European Union under 16 and children located in the United States under the age of 13 (collectively, "Children" and each, a "Child"), portions of the Websites and certain Services, including, but not limited to, School Edition Basic and School Edition Pro, are directed to Children, and we may collect information directly from Children in connection with those portions of the Websites and Services. Therefore, we provide this Children's Privacy Policy to explain our privacy practices with respect to Children who access and use our Websites and Services. {'\n'}{'\n'}
            Children may use either version of our School Edition provided that the holder of parental responsibility over the Child ("Parent") has provided consent and authorization, and the school has complied with its obligations under the Family Educational Rights and Privacy Act ("FERPA") and the Children's Online Privacy Protection Act ("COPPA"). If an appropriate school or school district official has consented to our collection of information from Children who are students in a manner consistent with COPPA, we will collect and use such personal information, but only for the use and benefit of the school and for no other commercial purpose. (We therefore do not allow Google AdSense or any other service to target ads to Children using School Edition Basic.) A school or school district must obtain the consent of a Parent or legal guardian prior to providing any Child's personal information. School officials or a Parent may revoke at any time their consent to allow Children to use the School Editions.{'\n'}{'\n'}
            Upon a Parent's or a legal guardian's request, we will provide a description of the personal information we collect, give parents the opportunity to review their Child's personal information or have such information deleted and the opportunity to prevent further collection or use of their Child's personal information. Parents and legal guardians may exercise any of these options by visiting https://www.typingclub.com/parents{'\n'}{'\n'}
            Through this Privacy Policy, we provide each school with all the notices required under COPPA, contained within this Privacy Policy. Parents also can request a copy of these notices and request access to their Child's Personal Information to review and/or have the information deleted by visiting https://www.typingclub.com/review-data
            </AppText>
            <AppText style={styles.sectionTitle}>
            Collection and Use of Information from Children
            </AppText>
            <AppText style={styles.detailsText}>
            The information we may collect on Children, either directly or from the school or school district, includes:
            • Required: First Name, User Name (which may be Email address){'\n'}
            • Optional: Last Name, Email address, Password, Student ID, Class, Grade, School{'\n'}
            • Data on student activity within the Websites and Services, including performance and progress within the system.{'\n'}{'\n'}
            We do not enable Children to make their Personal Information publicly available. We use the information collected on Children to:{'\n'}
            • Provide reports to teachers or school or school district administrators at the class, school, or district level;{'\n'}
            • Support teachers or school or school district administrators implementing our products or using our Services;{'\n'}
            • Monitor the use of our products and perform such analyses as might be necessary or helpful in improving product performance, efficiency, and security; and{'\n'}
            • Research how students use the Websites and Services and perform analysis directed at improving the educational effectiveness of our products and Services.{'\n'}{'\n'}
            We will not use any information collected about Children to directly advertise or market to students or their parents.
            In addition, we may automatically collect information about the devices Children under 16 use to interact with our Websites and Services. The information we automatically collect may include IP address or device identifier and activity on the Services, including the date and time of use. This information is de-identified and any usage information, device identifier, or other persistent identifier we collect is used for the sole purpose of providing support for the Websites and Services' internal operations.
            </AppText>
            <AppText style={styles.sectionTitle}>
            Disclosure of Information from Children
            </AppText>
            <AppText style={styles.detailsText}>
            MAL may rely on third-party service providers who provide support for the internal operations of the Websites and Services, such as hosting the Websites, designing and/or operating our Services, tracking analytics, or performing other administrative services as outlined in the Privacy Policy. These third party service providers are held to the same obligations as MAL with regard to information from Children, do not disclose or use information for any other purpose, and are subject to the terms of this agreement.{'\n'}{'\n'}
            We do not provide links to external resources or chat rooms. Nor do our Services contain any offensive or inappropriate content. As a result, any school that uses the School Editions will be fully compliant with the Children's Internet Protection Act, with respect to the use of the School Editions.{'\n'}{'\n'}
            For School Edition accounts, we will notify the Account Owner or Account Administrator to obtain consent prior to implementing any material changes to this Privacy Policy that increase our rights to use personal information we have previously collected about School Edition account holders.
            </AppText>
            <AppText style={styles.sectionTitle}>
            Data Subject Rights
            </AppText>
            <AppText style={styles.detailsText}>
            You can always opt not to disclose information to MAL. However, some information may be needed to create an account with MAL or to use our Services.
            </AppText>
            <AppText style={styles.sectionTitle}>
            Cookies
            </AppText>
            <AppText style={styles.detailsText}>
            You can accept or reject cookies through our Cookie Policy by changing the cookie settings on your web browser controls.
            </AppText>
            <AppText style={styles.sectionTitle}>
            Marketing Communications
            </AppText>
            <AppText style={styles.detailsText}>
            At any time, you can withdraw your consent and opt-out of receiving promotional or marketing communications from MAL at any time, by using the unsubscribe link in the emails communications or by visiting this unsubscribe link.{'\n'}{'\n'}
            If you have any account for our Services, MAL will still send you non-promotional communications, like service related emails.
            </AppText>
            <AppText style={styles.sectionTitle}>
            Exercising Your Data Subject Rights
            </AppText>
            <AppText style={styles.detailsText}>
            You have the right to access, review, update, rectify, and delete any Personal Information that MAL holds about you, or exercise any other data subject rights available to you under applicable data protection laws. In order to exercise your data subject rights, you can submit a request via email to privacy@typingclub.com. MAL's Privacy Team will review any request and respond within a reasonable time.{'\n'}
            • For users who have not created an account with MAL, MAL does not retain your personal information.{'\n'}
            • For users who have created an account with MAL, you can exercise your data rights directly in your account portal, or contact MAL directly at privacy@typingclub.com.{'\n'}
            • For School Account Holders, you can exercise your data rights directly in your account portal, or contact MAL directly at privacy@typingclub.com.{'\n'}{'\n'}
            Please note that we may still use any aggregated and de-identified Personal Information that does not identify any individual. MAL will also retain any Personal Information to the extent necessary to comply with MAL’s legal obligations, resolve disputes, and enforce MAL’s agreements, as outlined in this Privacy Policy.
            </AppText>
            <AppText style={styles.sectionTitle}>
            Links to Third-Party Websites
            </AppText>
            <AppText style={styles.detailsText}>
            As noted above, we use a third-party to deliver ads to you on the Individual Edition and on School Edition Basic. If you click on an ad, we are not responsible for any information that you provide to, or that is collected by, third parties. Such information will not be covered by this Privacy Policy, and we are not responsible for the content or privacy practices of websites that you reach through advertisements on our sites.
            </AppText>
            <AppText style={styles.sectionTitle}>
            International Data Transfers
            </AppText>
            <AppText style={styles.detailsText}>
            We maintain and operate our Websites and Services on servers located in the United States. If you choose to use our Websites or Services from regions outside the United States that have laws governing data collection and use that differ from U.S. law, you acknowledge and agree that you are transferring personal information outside of that region to the United States and, by providing such information, you consent to the use of your personal data as identified in this Privacy Policy and the transfer of your personal data to the United States
            </AppText>
            <AppText style={styles.sectionTitle}>
            Business Transfers
            </AppText>
            <AppText style={styles.detailsText}>
            We may sell, transfer, or otherwise share some or all of our assets, including personal information, in connection with a merger, acquisition, reorganization, or sale of assets, or in the event of bankruptcy. Any such sale, transfer, or otherwise sharing of our assets shall be subject to the restrictions of this Privacy Policy and any applicable data protection laws
            </AppText>
            <AppText style={styles.sectionTitle}>
            California Privacy Rights
            </AppText>
            <AppText style={styles.detailsText}>
            California residents are entitled to ask us for a notice identifying the categories of Personal Information which we share with our affiliates and/or third parties for marketing purposes, and providing contact information for such affiliates and/or third parties. We do not share any personal information with third parties for the third parties' direct marketing purposes. If this practice changes, we will notify you by prominent posting on our digital properties. If you are a California resident and would like a copy of this notice, please contact us with music@sf-ns.org{'\n'}{'\n'}
            The portions of the digital properties directed to students and children under 13 do not enable or have a forum for the posting or sharing of content or information.
            </AppText>
            <AppText style={styles.sectionTitle}>
            Changes to this Privacy Policy
            </AppText>
            <AppText style={styles.detailsText}>
            We ask that you read this Privacy Policy from time to time. MAL may modify this Privacy Policy at any time in its sole discretion. If we make material changes to this Privacy Policy that increase our rights to use personal information we have previously collected about you, we will obtain your consent either through an email to your registered email address or by prominent posting on our sites.{'\n'}{'\n'}
            For School Edition accounts, we will notify the Account Owner or Account Administrator to obtain consent prior to implementing any material changes to this Privacy Policy that increase our rights to use personal information we have previously collected about School Edition account holders.
            </AppText>
            <AppText style={styles.sectionTitle}>
            Contact
            </AppText>
            <AppText style={styles.detailsText}>
            If you have any comments or questions about this Privacy Policy, please contact us at 1701 Pennsylvania Avenue, NW, Suite 200, Washington, DC 20006, or privacy@typingclub.com.
            </AppText>
            </ScrollView>
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: colors.yellowgreen,
    },
    scrollArea: {
        backgroundColor: colors.white,
    },
    screenTitle: {
        fontSize: 23,
        fontWeight: 'bold',
        color: colors.white,
        alignSelf: 'center',
        marginTop: 25,
        marginBottom: 25,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '500',
        color: colors.dark,
        alignSelf: 'auto',
        marginBottom: 25,
        marginLeft: 25,
        marginRight: 25,
    },
    detailsText: {
        fontSize: 14,
        fontWeight: '500',
        color: colors.dark,
        alignSelf: 'auto',
        marginBottom: 25,
        marginLeft: 25,
        marginRight: 25,
    },
})

export default PrivacyPolicyScreen;