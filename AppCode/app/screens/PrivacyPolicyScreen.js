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
                Music as Language, doing business under The Scholarship Foundation of Northshore (collectively, "MAL", "we", "our", or "us") is deeply committed to protecting the privacy of our users’ personal information. This MAL Privacy Policy ("Privacy Policy") applies to the Music As Language App and governs our data collection, processing and usage. Access to and use of the App, and the services provided on the App (collectively, the "Service"), will be subject to this Privacy Policy as set forth below.{'\n'}{'\n'} 
                We offer services through our app called Music As Language which is available through iOS and Android devices.{'\n'}{'\n'} 
                PLEASE NOTE: Our App is a general audience app through which we do not knowingly collect information from children located in the United States under the age of 13 and children located in the European Union under the age of 16 (collectively, "Children" and each, a "Child"). Children may access the MAP App through a parent approved purchase of the App and installed on their device. Information collected from children through the App is outlined below. 
                </AppText>
                
                <AppText style={styles.sectionTitle}>
                Information We Collect
                </AppText>
                <AppText style={styles.detailsText}>
                We may collect information directly from anyone who uses the app, whether student or parent. In addition, we may use cookies and other tracking means to collect information from anyone using the app.{'\n'}{'\n'} 
                We collect information from you directly when you sign up for an account, use one of the Services, or choose to save information about your use of our Services. The following is the information collected, processed and stored through our App.{'\n'}{'\n'} 
                When you create an account on our App, we may collect the following information:{'\n'}{'\n'} 
                {'\n'}{'\n'} 
                Your Name, Your Email Address, and Other relevant contact information.{'\n'}{'\n'} 
                {'\n'}{'\n'} 
                MAL collects and processes this basic account information in order to provide you with an account, access to the Services, and communicate with you regarding our Services. An account is required to save and track your progress on our Services. {'\n'}{'\n'} 
                Performance Information. If you establish an account with us and choose to save your progress on our Services, we will collect information about your performance on our Services. This will enable us to return you to the correct place when you return to our App. {'\n'}{'\n'} 
                {'\n'}{'\n'} 
                {'\n'}{'\n'} 
                </AppText>
                
                <AppText style={styles.sectionTitle}>
                How We Use and Share Information
                </AppText>
                <AppText style={styles.detailsText}>
                We use the information described above to provide, maintain, and improve the app and services, to communicate with you.{'\n'}{'\n'}
                Necessary Uses and Sharing of Your Information. When you create an account on our Services, you are given the option to consent to the use of your information as described in this Privacy Policy. Certain uses of your information are necessary in order to provide the Services to you. These include your name and contact information to create and maintain an account. If you do not consent to the use of this information, we are unable to provide the Services to You.{'\n'}{'\n'}
                Service Providers. We may use certain third parties and contractors ("Service Providers") to assist us in providing and maintaining our Services. MAL uses Azure to store its data. Other than the storage of that data, MAL does not provide personal information to Service Providers. Azure's privacy policies can be viewed here https://azure.microsoft.com/en-us/support/legal/.{'\n'}{'\n'} 
                Additional Disclosures. We also may disclose personal information about you with your permission, as required by applicable law or legal process, as necessary to enforce our Terms of Service or Privacy Policy, to investigate or defend against third-party claims or allegations, to protect the security and integrity of our Services and property, and to protect our rights or personal safety and that of our users or others. We may disclose or transfer your personal information in connection with, or during negotiations concerning, any sale, merger, bankruptcy, sale of assets, financing, acquisition, or reorganization, in whole or in part. 
                </AppText>

                <AppText style={styles.sectionTitle}>
                Business Transfers
                </AppText>
                <AppText style={styles.detailsText}>
                We may sell, transfer, or otherwise share some or all of our assets, including personal information, in connection with a merger, acquisition, reorganization, or sale of assets, or in the event of bankruptcy. Any such sale, transfer, or otherwise sharing of our assets shall be subject to the restrictions of this Privacy Policy and any applicable data protection laws.
                </AppText>

                <AppText style={styles.sectionTitle}>
                How We Protect Your Personal Information
                </AppText>
                <AppText style={styles.detailsText}>
                We take into account the state of the art, the costs of implementation and the nature, scope, context and purposes of processing as well as the risk of varying likelihood and severity for the rights and freedoms of natural persons, and implement appropriate technical, physical and organizational measures to ensure an appropriate level of security to protect the personal information that we collect and process, both while in transit and while in storage. No method of transmission over the Internet or method of electronic storage is 100% secure, however. Therefore, while we use reasonable security safeguards to protect your personal information, we cannot guarantee absolute security.
                </AppText>

                <AppText style={styles.sectionTitle}>
                Children's Information
                </AppText>
                <AppText style={styles.detailsText}>
                Children located in the United States under the age of 13 and children located in the European Union under the age of 16 are not permitted to use the App without the consent of a parent or legal guardian. If you become aware that your Child has provided us with personal information in connection with the Individual Edition without your consent, please contact us at musicaslanguage@sf-ns.org. If we become aware that a Child has provided us with personal information in connection with the App without the parents' consent or consent of a legal guardian, we will take steps to delete such information and terminate the Child's account.
                </AppText>

                <AppText style={styles.sectionTitle}>
                Exercising Your Data Subject Rights
                </AppText>
                <AppText style={styles.detailsText}>
                You have the right to access, review, update, rectify, and delete any Personal Information that MAL holds about you, or exercise any other data subject rights available to you under applicable data protection laws. In order to exercise your data subject rights, you can submit a request via email to musicaslanguage@sf-ns.org. MAL's Privacy Team will review any request and respond within a reasonable time.{'\n'}{'\n'}
                • For users who have not created an account with MAL, MAL does not retain your personal information.{'\n'}{'\n'}
                Please note that for the purposes of improving app functionality and performance we may still use any aggregated and de-identified informationthat does not identify any individual. MAL will also retain any Personal Information to the extent necessary to comply with MAL's legal obligations, resolve disputes, and enforce MAL's agreements, as outlined in this Privacy Policy. 
                </AppText>

                <AppText style={styles.sectionTitle}>
                International Data Transfers
                </AppText>
                <AppText style={styles.detailsText}>
                We maintain and operate our App and Services on servers located in the United States. If you choose to use our Websites or Services from regions outside the United States that have laws governing data collection and use that differ from U.S. law, you acknowledge and agree that you are transferring personal information outside of that region to the United States and, by providing such information, you consent to the use of your personal data as identified in this Privacy Policy and the transfer of your personal data to the United States.
                </AppText>

                <AppText style={styles.sectionTitle}>
                California Privacy Rights
                </AppText>
                <AppText style={styles.detailsText}>
                California residents are entitled to ask us for a notice identifying the categories of Personal Information which we share with our affiliates and/or third parties for marketing purposes, and providing contact information for such affiliates and/or third parties. We do not share any personal information with third parties for the third parties' direct marketing purposes. If this practice changes, we will notify you by prominent posting on our digital properties. If you are a California resident and would like a copy of this notice, please contact us with musicaslanguage@sf-ns.org {'\n'}{'\n'} 
                The portions of the digital properties directed to people under 13 years old do not enable or include a forum for posting or sharing of content or information.
                </AppText>

                <AppText style={styles.sectionTitle}>
                Changes to this Privacy Policy
                </AppText>
                <AppText style={styles.detailsText}>
                We ask that you read this Privacy Policy from time to time. MAL may modify this Privacy Policy at any time in its sole discretion. If we make material changes to this Privacy Policy that increase our rights to use personal information we have previously collected about you, we will obtain your consent either through an email to your registered email address or by prominent posting on our sites. We store information we collect for as long as you have an account. If an account is inactive for a period of time we may delete the account and associated data. Additionally, we may retain user information to resolve disputes, enforce our policies, and comply with law.
                </AppText>

                <AppText style={styles.sectionTitle}>
                Contact
                </AppText>
                <AppText style={styles.detailsText}>
                If you have any comments or questions about this Privacy Policy, please contact us at MusicAsLanguage P.O Box 1773 Woodinville, WA 98072, or musicaslanguage@sf-ns.org
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