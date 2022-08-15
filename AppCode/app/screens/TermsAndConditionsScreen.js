import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';

import Screen from '../components/Screen';
import colors from '../config/colors';
import routes from "../navigation/routes";
import AppText from "../components/AppText";
import BackButton from "../components/BackButton";
import uistrings from '../config/uistrings';


function TermsAndConditionsScreen({ navigation }) {
    return (
        <Screen style={styles.screen}>
            <BackButton onPress={() => navigation.navigate(routes.SETTINGS)} />
            <AppText style={styles.screenTitle}>{uistrings.TermsAndConditions}</AppText>
            <ScrollView style={styles.scrollArea}>
            <AppText style={styles.sectionTitle}>
            MusicAsLanguage Terms of Service
            </AppText>
            <AppText style={styles.detailsText}>
            Last Updated: June 1, 2021
            </AppText>
            <AppText style={styles.sectionTitle}>
            Welcome to MusicAsLanguage!
            </AppText>
            <AppText style={styles.detailsText}>
            The mission of Music as Language (MaL) is to foster an environment where students of voice can do and be their best. To accomplish this, two things are essential:{'\n'} 
            • The Music as Language app must be a safe place for students to document their learning{'\n'} 
            • Holders of MaL accounts (even when they are parents and teachers of students using the app) must have complete control over whether, and how, app information gets shared {'\n'}{'\n'} 
            These Terms & Conditions govern your use of our websites at https://www.musicprojectnorthshore.com/ and the MaL app (collectively “the MaL Service,” “the Service,” or “MaL”). By creating a MaL account you agree to be bound by our Terms & Conditions (our “Terms”). If you don't agree, please don't use MaL. These Terms include a Binding Arbitration clause. Please read below to see how you can opt out. 
            </AppText>
            <AppText style={styles.sectionTitle}>
            OUR PRIVACY PROMISES
            </AppText>
            <AppText style={styles.detailsText}>
            Protecting your privacy is fundamental to our mission and operations. We promise: {'\n'} 
            • We will never sell data we collect from app use {'\n'} 
            • We never advertise third-party products in MaL {'\n'} 
            • We will never assume ownership of any content you add to MaL {'\n'} 
            • We will safeguard your data and privacy using state-of-the-art security{'\n'} 
            • We will remain transparent about our practices and will notify you of changes to privacy and security {'\n'} 
            • We will maintain compliance with FERPA, COPPA, GDPR, MFIPPA, and the Australian Privacy Act {'\n'}{'\n'} 
            See our Privacy Policy for more on how MaL collects, stores, uses, shares, and protects your personal data.  
            </AppText>
            <AppText style={styles.sectionTitle}>
            MAL AND PARENTAL CONSENT 
            </AppText>
            <AppText style={styles.detailsText}>
            We require that teachers or schools get parental consent before using MaL with children who are under the age when they can grant consent on their own. This age may vary based on where you live. For example, in the US that age is younger than 13. You should check your local laws to determine the relevant age in your country. If you are aware MaL is collecting information from a student without parental consent, please contact us immediately at help@MaL.me and we will delete the data. {'\n'}{'\n'} 
            If you are a teacher or school administer getting parental consent for students to use the app via your MaL account, consider the following:{'\n'} 
            • Get consent as part of a school-wide technology-consent process (check whether this is in place already) {'\n'} 
            • Use our sample consent form (but please note that this is an example only and does not constitute legal advice) {'\n'} 
            • For teachers in the United States, agree to act as the parent's agent and provide consent on their behalf to use MaL solely in the educational context as determined by the FTC 
            </AppText>
            <AppText style={styles.sectionTitle}>
            MAL AND FERPA 
            </AppText>
            <AppText style={styles.detailsText}>
            Data collected by MaL may include personally identifiable information from education records that are subject to the Family Educational Rights and Privacy Act, “FERPA”, ("FERPA Records"). To the extent that Student Data includes FERPA Records, you designate MaL as a "School Official" (as that term is used in FERPA and its implementing regulations) under the direct control of the school with regard to the use and maintenance of the FERPA Records and MaL agrees to comply with FERPA.
            </AppText>
            <AppText style={styles.sectionTitle}>
            MAL AND GDPR
            </AppText>
            <AppText style={styles.detailsText}>
            MaL complies with the European Union General Data Protection Regulation (the “GDPR”) and makes it easy for EU individuals to exercise their rights described in that regulation. The purposes for which MaL collects your information, the categories and specific types of information, and our practices and policies regarding the processing of your information are described in our Privacy Policy. If you have specific questions about how MaL complies with GDPR, please see our frequently asked questions about GDPR.
            </AppText>
            <AppText style={styles.sectionTitle}>
            CREATING A TEACHER ACCOUNT
            </AppText>
            <AppText style={styles.detailsText}>
            Only teachers or school administrators can create a class on MaL. Once the class is created, teachers can authorize student participants, additional faculty, and parents and other family members with appropriate permissions to upload, view, comment on, and share work.{'\n'}{'\n'} 
            You should consult with your school or school district to ensure that you obtain proper consent to use MaL in the classroom consistent with their policies.{'\n'}{'\n'} 
            When you create a MaL class, you agree that:{'\n'} 
            • Any students you add to your class are current students in your class{'\n'} 
            • Any additional teachers you add to your class are authorized by your school to access student journals{'\n'} 
            • You will use MaL only for lawful purposes and abide by applicable law and school and school district policies in your use of MaL{'\n'} 
            • You will treat MaL as an extension of the classroom and take reasonable steps to confirm that students are using MaL appropriately{'\n'} 
            • You will take reasonable measures to protect access to information contained in student journals and class journals{'\n'} 
            • You will only invite parents, guardians, and other trusted adults to view student journals{'\n'} 
            • You will protect your class QR code so that access to student journals and class journals is limited only to students and parents, guardians, and other trusted adults 
            </AppText>
            <AppText style={styles.sectionTitle}>
            CREATING A PARENT OR FAMILY MEMBER ACCOUNT
            </AppText>
            <AppText style={styles.detailsText}>  
            Teachers can authorize parents and family members to view information in their child's journal. By creating a parent account and accessing a student journal, you agree that you are the legal guardian of the student or have permission from the legal guardian of the student to create a parent account and access the student journal.{'\n'}{'\n'} 
            As a parent, you will only be able to access journal entries in which your child has been tagged. Other parents and adults may be able to access your child's work if your child is tagged in a journal entry with their child, such as when your child collaborates with other students on a group project, and visa versa. 
            </AppText>
            <AppText style={styles.sectionTitle}>
            CREATING A STUDENT ACCOUNT
            </AppText>
            <AppText style={styles.detailsText}>
            Students may use MaL only if their parent or legal guardian has given permission to their teacher or school. You agree to use MaL only if you have been given a Join Code or have otherwise been invited to use MaL by your teacher.{'\n'}{'\n'} 
            MaL is an extension of the classroom. You agree to use MaL in a manner that is appropriate to the classroom. You may not violate the policies of your school or school district in your use of MaL. 
            </AppText>
            <AppText style={styles.sectionTitle}>
            SUBMISSIONS TO THE ACTIVITY LIBRARY
            </AppText>
            <AppText style={styles.detailsText}>
            Activities teachers create are private to their account by default. Optionally, teachers may choose to publish activities they create to the public Community Activity Library or an Activity Library managed by their school or district. By choosing to submit your activity to the Activity Library, you're telling us that:{'\n'} 
            • You are the copyright holder, you have the consent of the copyright holder, or you have a valid legal basis (for example, fair use) for posting any content you submit to MaL{'\n'} 
            • You have secured permission to share the photograph of any person included in your activity{'\n'}{'\n'} 
            Any activities you submit are yours - not MaL's. By submitting your activity to the Community Activity Library you understand that:{'\n'} 
            • Your activity will be publicly accessible unless you choose to remove it. Your name and other activities you have contributed to the library will be visible as part of your Activity Author Profile{'\n'} 
            • For as long as your activity is published to the Library, your activity may be shared by MaL (for example on our website or in an email) and by teachers using MaL. Teachers using MaL may also modify your activity and re-share it with their students or other teachers{'\n'} 
            • If you remove your activity from the library, prior copies of your activity or modified versions of your activity may still exist in other teachers' accounts and will not be removed{'\n'}{'\n'} 
            Student responses to activities are not shared in the Activity Library. 
            </AppText>
            <AppText style={styles.sectionTitle}>
            CONSENT TO RECEIVE SMS MESSAGES
            </AppText>
            <AppText style={styles.detailsText}>
            Family members can receive SMS notifications about new posts or messages in MaL. You can cancel at any time. Text "STOP" to unsubscribe. Text "HELP" for instructions on how to use our service. Message frequency varies. Message and data rates may apply. For questions about SMS notifications, email help@MaL.me.{'\n'} 
            • Participating carriers: AT&T, Verizon Wireless, Sprint, T-Mobile, U.S. Cellular, Boost Mobile, MetroPCS, Virgin Mobile, Alaska Communications Systems (ACS), Appalachian Wireless (EKN), Bluegrass Cellular, Cellular One of East Central, IL (ECIT), Cellular One of Northeast Pennsylvania, Cricket, Coral Wireless (Mobi PCS), COX, Cross, Element Mobile (Flat Wireless), Epic Touch (Elkhart Telephone), GCI, Golden State, Hawkeye (Chat Mobility), Hawkeye (NW Missouri), Illinois Valley Cellular, Inland Cellular, iWireless (Iowa Wireless), Keystone Wireless (Immix Wireless/PC Man), Mosaic (Consolidated or CTC Telecom), Nex-Tech Wireless, NTelos, Panhandle Communications, Pioneer, Plateau (Texas RSA 3 Ltd), Revol, RINA, Simmetry (TMP Corporation), Thumb Cellular, Union Wireless, United Wireless, Viaero Wireless, and West Central (WCC or 5 Star Wireless).{'\n'} 
            • T-Mobile is not liable for delayed or undelivered messages. 
            </AppText>
            <AppText style={styles.sectionTitle}>
            YOUR INTELLECTUAL PROPERTY
            </AppText>
            <AppText style={styles.detailsText}>
            We don't own the content you provide. Students and their schools own all Student Data created in or added to MaL.{'\n'}{'\n'} 
            However, in order to provide our Services, we need certain limited rights to your content. For example, when you upload your content, we need the rights to store it and serve it back to you. Therefore, you grant MaL the right to use, publish, transmit, display, copy, process, adapt, modify, and distribute your content only how you specify and only within the context of the MaL service.{'\n'}{'\n'} 
            MaL reserves the right, but has no obligation, to delete content posted on our Services if we receive a valid takedown notice or if your content violates any of our Prohibited Activities. 
            </AppText>
            <AppText style={styles.sectionTitle}>
            MAL'S INTELLECTUAL PROPERTY
            </AppText>
            <AppText style={styles.detailsText}>
            MaL is protected by copyright, trademark, and other intellectual property laws. MaL Learning, Inc. and its licensors grant you a limited, non-exclusive, non-transferable license to view, copy, and display MaL solely in connection with your permitted use of MaL. Any rights not expressly granted here are reserved.{'\n'}{'\n'} 
            Unauthorized use of MaL's logos, trademarks, copyrights, domain names, or other distinctive brand features is prohibited. 
            </AppText>
            <AppText style={styles.sectionTitle}>
            COPYRIGHT POLICY
            </AppText>
            <AppText style={styles.detailsText}>
            MaL complies with the Digital Millennium Copyright Act. To learn more about how MaL responds to allegations of copyright infringement, please review our Copyright Policy. 
            </AppText>
            <AppText style={styles.sectionTitle}>
            PROHIBITED ACTIVITIES
            </AppText>
            <AppText style={styles.detailsText}>
            All users agree that they will refrain from the following prohibited activities when using MaL. Prohibitions include: {'\n'}
            • Don't use MaL in a manner that violates any applicable laws, regulations, ordinances, or directives{'\n'} 
            • Don't use MaL in any manner that would be inappropriate for the classroom or violates applicable school or school district policies{'\n'} 
            • Don't use MaL to lie or mislead other users{'\n'} 
            • Don't use MaL to distribute unsolicited or unauthorized unsolicited communications, promotions, advertisements or spam{'\n'} 
            • Don't use MaL to do anything threatening, abusive, harassing, defamatory, tortious, obscene, profane, or invasive of another person’s privacy{'\n'} 
            • Don't do anything that interferes with the proper functioning of any software, hardware, or equipment that belongs to MaL or anyone else{'\n'} 
            • Don't impersonate MaL or our users on MaL or elsewhere{'\n'} 
            • Don't interfere with anyone's use or enjoyment of MaL{'\n'} 
            • Don't use personal information about other users, including students, without consent or as forbidden by applicable law or regulation{'\n'} 
            • Don't use MaL in a way that infringes the intellectual property rights of others{'\n'} 
            • Don't crawl, scrape, or use any manual or automated system to copy any public content available within MaL 
            </AppText>
            <AppText style={styles.sectionTitle}>
            ACCOUNT SUSPENSION AND TERMINATION
            </AppText>
            <AppText style={styles.detailsText}>
            MaL reserves the right to suspend or terminate accounts associated with users who engage in any of the prohibited activities described above or in any manner that otherwise violates our Terms or other policies. In addition, MaL reserves the right to terminate any account at any time for any reason without notice to you.      
            </AppText>
            <AppText style={styles.sectionTitle}>
            ABANDONED ACCOUNTS
            </AppText>
            <AppText style={styles.detailsText}>
            MaL reserves the right to terminate accounts that have not been accessed by the teacher or school associated with the account for a period of more than one year. Prior to terminating an abandoned account, MaL will notify the teacher or school associated with the account by email and provide an opportunity to download an archive copy of the class journal.
            </AppText>
            <AppText style={styles.sectionTitle}>
            SECURITY
            </AppText>
            <AppText style={styles.detailsText}>
            MaL takes protecting your security and privacy seriously and we've put a number of measures in place to protect the integrity of your information, including use of highly secure, access-controlled data centers, routine 3rd party security audits, data encryption in transit and encryption of Journal Content at rest. For more information, please read this article.{'\n'}{'\n'} 
            In the event of a security breach, we will notify affected account holders within the amount of time required by law so that you can take steps to keep your data safe. 
            </AppText>
            <AppText style={styles.sectionTitle}>
            CHANGES TO OUR TERMS
            </AppText>
            <AppText style={styles.detailsText}>
            MaL may modify our Terms from time to time. MaL will notify you of any changes to our terms that materially alter your rights or responsibilities by email and by posting a notice to our site. If you as a teacher, parent, or school administrator continue to use MaL after you receive such a notice, you agree to be bound by any changes to our Terms.
            </AppText>
            <AppText style={styles.sectionTitle}>
            WARRANTIES AND DISCLAIMERS
            </AppText>
            <AppText style={styles.detailsText}>
            YOUR USE OF MaL IS AT YOUR SOLE RISK. MaL AND ANY THIRD-PARTY SOFTWARE, SERVICES, OR APPLICATIONS MADE AVAILABLE IN CONNECTION WITH MaL ARE PROVIDED “AS IS,” WITHOUT WARRANTY OF ANY KIND. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, MaL, AND ITS SUPPLIERS AND PARTNERS, DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT OF PROPRIETARY RIGHTS. MaL AND ITS SUPPLIERS AND PARTNERS DO NOT WARRANT THAT THE FUNCTIONS CONTAINED IN THE MaL SERVICE WILL BE UNINTERRUPTED OR ERROR-FREE, THAT DEFECTS WILL BE CORRECTED, THAT THE MaL SERVICE OR THE SERVERS THAT MAKE THEM AVAILABLE ARE FREE OF HARMFUL COMPONENTS OR THAT THE MaL SERVICE WILL MEET YOUR REQUIREMENTS. YOU ARE SOLELY RESPONSIBLE FOR ANY DAMAGE TO YOUR EQUIPMENT OR DEVICE, LOSS OF USE, OR LOSS OF DATA. NOTHING IN THIS SECTION IS INTENDED TO LIMIT ANY RIGHTS YOU MAY HAVE WHICH MAY NOT BE LAWFULLY LIMITED.
            </AppText>
            <AppText style={styles.sectionTitle}>
            INDEMNITY
            </AppText>
            <AppText style={styles.detailsText}>
            You agree to indemnify and hold harmless MaL from any and all claims, suits, actions, losses, costs, damages, and any other liabilities, including attorneys' fees, arising out of or related to: (a) your use or misuse of MaL; (b) any violation of the rights of any other person or entity by you, including without limitation, any intellectual property right, publicity, confidentiality, property or privacy right; or (c) your breach of any part of our Terms. MaL will give you written notice of any such matter; however, any failure or delay by MaL to do so does not negate your defense or indemnification obligations or waive MaL's rights to seek payment or defense or indemnification from you. MaL reserves the right, at your expense, to assume the exclusive defense and control of any matter for which you are required to indemnify us, and you agree to cooperate with MaL in our defense of these claims. You will not settle any claim that affects MaL or our affiliates without our prior written approval. 
            </AppText>
            <AppText style={styles.sectionTitle}>
            LIMITATION OF LIABILITY
            </AppText>
            <AppText style={styles.detailsText}>
            To the maximum extent permitted by law, MaL will not be liable to you for any special, indirect, incidental, punitive, reliance, consequential, or exemplary damages, even if MaL has been advised of the possibility of damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, goodwill or other intangible losses relating to or resulting from: (a) your access to, use of, or inability to use MaL; (b) any conduct or content of any user or third party on our services; (c) unauthorized access, use, or alterations of your transmissions or content; (d) any information posted on MaL; or (e) MaL's decision to publish or remove any information on our service.{'\n'}{'\n'} 
            In no event shall MaL's total liability to you for all damages, losses, or causes of action arising out of or relating to our Terms exceed: (1) the amounts you paid to access MaL during the twelve (12) months immediately preceding the date of your claim, or (2) one thousand U.S. dollars, whichever is greater.{'\n'}{'\n'} 
            The limitations of liability set forth in this section will survive any termination or expiration of our Terms, and will apply even if any limited remedy specified in our Terms is found to have failed of its essential purpose. 
            </AppText>
            <AppText style={styles.sectionTitle}>
            LAW GOVERNING LEGAL DISPUTES
            </AppText>
            <AppText style={styles.detailsText}>
            The laws of the State of California govern this agreement, as well as any dispute, claim, or controversy that may arise between you and MaL, without to conflicts of law provisions.
            </AppText>
            <AppText style={styles.sectionTitle}>
            INFORMAL DISPUTE RESOLUTION
            </AppText>
            <AppText style={styles.detailsText}>
            We want to address your concerns without needing a formal legal case. Before filing a claim against MaL, you agree to try to resolve the Dispute informally by contacting help@MaL.me. We'll try to resolve the Dispute informally by contacting you through email. If a dispute is not resolved within 15 days after submission, you or MaL may bring a formal proceeding.
            </AppText>
            <AppText style={styles.sectionTitle}>
            WE BOTH AGREE TO ARBITRATE
            </AppText>
            <AppText style={styles.detailsText}>
            You and MaL agree to resolve any Disputes through final and binding arbitration, except as set forth under Exceptions to Agreement to Arbitrate below.
            </AppText>
            <AppText style={styles.sectionTitle}>
            OPT-OUT OF AGREEMENT TO ARBITRATE
            </AppText>
            <AppText style={styles.detailsText}>
            You can decline this agreement to arbitrate by contacting help@MaL.me within 30 days of first accepting these Terms of Service and stating that you (include your first and last name) decline this arbitration agreement.{'\n'}{'\n'} 
            Arbitration Procedures: The American Arbitration Association (AAA) will administer the arbitration under its Commercial Arbitration Rules and the Supplementary Procedures for Consumer Related Disputes. The arbitration will be held in the United States county where you live or work, San Francisco, California, or any other location we agree to.{'\n'}{'\n'} 
            Arbitration Fees: The AAA rules will govern payment of all arbitration fees. MaL will pay all arbitration fees for claims less than $75,000. MaL will not seek its attorneys' fees and costs in arbitration unless the arbitrator determines that your claim is frivolous.{'\n'}{'\n'} 
            Exceptions to Agreement to Arbitrate: Either you or we may assert claims, if they qualify, in small claims court in San Francisco (CA) or any United States county where you live or work. Either party may bring a lawsuit solely for injunctive relief to stop unauthorized use or abuse of the MaL products or Service, or infringement of intellectual property rights (for example, trademark, trade secret, copyright or patent rights) without first engaging in arbitration or the informal dispute-resolution process described above. 
            </AppText>
            <AppText style={styles.sectionTitle}>
            NO CLASS ACTIONS
            </AppText>
            <AppText style={styles.detailsText}>
            You may only resolve legal disputes with MaL as an individual. You may not bring a claim as a plaintiff or a class member in a class, consolidated, or representative action. Class arbitrations, class actions, private attorney general actions, and consolidation with other arbitrations aren't allowed under our agreement.
            </AppText>
            <AppText style={styles.sectionTitle}>
            FEEDBACK
            </AppText>
            <AppText style={styles.detailsText}>
            We welcome your feedback and suggestions about MaL. Write to us any time at musicaslanguage@sf-ns.org.
            </AppText>
            <AppText style={styles.sectionTitle}>
            ENTIRE AGREEMENT
            </AppText>
            <AppText style={styles.detailsText}>
            These Terms (and any other policies we refer to in this document) make up the entire agreement between you and MaL Learning, Inc., and supersede any prior agreement. If any part of these Terms are found to be unenforceable by a court or arbitrator, the remaining parts will remain in full force and effect. If MaL fails to enforce any part of these Terms, such a failure does not constitute a waiver. 
            </AppText>
            <AppText style={styles.sectionTitle}>
            CONTACT INFORMATION
            </AppText>
            <AppText style={styles.detailsText}>
            Music Project{'\n'} 
            P O Box 1773{'\n'} 
            Woodinville, WA 98072{'\n'} 
            musicaslanguage@sf-ns.org  
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
        color: colors.dark,
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

export default TermsAndConditionsScreen;