# Privacy Policy for My App

**Effective Date:** March 3, 2026

This Privacy Policy describes how My Company Ltd ("we", "us", or "our") collects, uses, and shares your personal information. It covers two contexts:

- My App — our mobile application (the "App"), currently provided as a free service
- Our website at yourwebsite.com (the "Site")

Please note that the App and the Site are separate services with different data practices; most of this Policy relates to the App. Website-specific practices are covered in Section 6.

---

## 1. Information We Collect

We collect a minimal amount of data necessary to provide the App's features.

### 1.1 Personal Information

When you sign up using **Google Sign-In** or **Sign in with Apple**, we collect:

- **Name** (as provided by the authentication provider)
- **Email Address**

This information is used solely to create and manage your user account.

### 1.2 Usage & Diagnostic Data (Firebase Crashlytics)

We offer **Firebase Crashlytics** as an optional, opt-in feature to help monitor App stability. It is **disabled by default** and can be enabled or disabled at any time in the App's settings. When enabled and the App crashes or encounters a significant error, it sends a report containing:

- **Device type and OS version** (e.g., iPhone 15, Android 14)
- **Firebase Installation UUID** — a randomised, pseudonymous ID used to count distinct affected devices, not to identify you personally
- **Stack traces** — technical details about where the code failed

This data is **pseudonymised** and is not intentionally linked to your name or email in our crash reporting dashboard. Under GDPR, a Firebase Installation UUID is still considered personal data; we process it on the basis of our legitimate interest in maintaining App stability. Crashlytics data is retained for up to **90 days**, in line with Firebase's standard retention period.

### 1.3 Local Storage (On-Device)

The App stores a small amount of data directly on your device, including:

- **Authentication tokens** — to keep you securely logged in without requiring you to re-enter your credentials each session
- **App data** — a local copy of your skills, quests, and tasks for offline access
- **App settings and preferences**

The App stores your data directly on your device, including authentication tokens, app settings and preferences, and all content you create within the App (such as quests, tasks, and progress records). This data is stored only on your device and is not transmitted to our servers unless you are a subscriber with syncing enabled (see Section 2.2). It is cleared when you delete your account but is **not** cleared on logout.

### 1.4 Device Information (Expo Framework)

The App is built using the Expo framework. As part of standard app operation and to deliver over-the-air updates, Expo may collect basic device identifiers and platform information (such as OS version and device model). This is handled in accordance with [Expo's Privacy Policy](https://expo.dev/privacy).

### 1.5 Push Notifications

If you grant permission, the App may send you push notifications (for example, streak reminders). To deliver these, a push notification token associated with your device is stored on our servers. You can withdraw permission at any time in your device's system settings.

### 1.6 Information We Do NOT Collect

- We do **not** collect precise GPS location data.
- We do **not** access your contacts, photos, or camera unless explicitly requested for a specific feature and you grant permission.
- We do **not** currently display advertisements. See Section 2.4 for details on our planned future advertising features.

---

## 2. How We Use Your Information

| Purpose | Data Used | Legal Basis (GDPR/UK GDPR) |
|---|---|---|
| Authenticating users and maintaining your account | Name, email | Performance of a contract |
| Storing and syncing your App content | Skills, quests, tasks, XP data | Performance of a contract |
| Fixing bugs and improving performance | Crashlytics data | Legitimate interests |
| Sending essential account-related notifications | Email | Performance of a contract |
| Delivering push notifications (if enabled) | Push token | Consent |
| Delivering App updates | Device info via Expo | Legitimate interests |

### 2.1 Future: Advertising (Free Tier)

We intend to introduce advertising for free-tier users in the future. When we do:

- We will use a third-party advertising SDK (such as Google AdMob). This may involve the collection of your **Advertising ID** (IDFA on iOS, GAID on Android), device information, and in-app behaviour to serve relevant ads.
- **Before any ad-related tracking begins, we will update this Policy and implement a consent mechanism** (such as a consent management platform compliant with IAB TCF 2.2 for EEA/UK users, and ATT prompt on iOS) to obtain your permission where required by law.
- You will be able to opt out of personalised advertising at any time via your device settings or within the App.

### 2.2 Future: Paid Tier

We intend to introduce a paid subscription tier offering additional features (including cross-device syncing). When we do:

- Payment processing will be handled entirely by the relevant platform (Apple App Store or Google Play). We do **not** directly collect or store your payment card details.
- We may receive limited transaction metadata (such as subscription status and renewal dates) from Apple or Google to manage your access to paid features.
- We will update this Policy before launching any paid tier.

Subscribers will have their app content data (quests, tasks, progress records, and settings) synced to and stored on our Supabase servers to enable cross-device access. This data will be deleted from our servers within 30 days of account deletion or subscription cancellation, whichever comes first.

---

## 3. Third-Party Service Providers

We do not sell your personal data. We share information with the following providers only to the extent necessary for the App to function:

| Provider | Purpose | Privacy Policy |
|---|---|---|
| **Google Sign-In / Firebase** | Authentication and crash reporting | [policies.google.com/privacy](https://policies.google.com/privacy) |
| **Sign in with Apple** | Authentication | [apple.com/legal/privacy](https://www.apple.com/legal/privacy/) |
| **Supabase** | Database storage (primary region: EU — Sweden) | [supabase.com/privacy](https://supabase.com/privacy) |
| **Expo** | App framework and over-the-air updates | [expo.dev/privacy](https://expo.dev/privacy) |

### 3.1 International Data Transfers

Our primary database provider, Supabase, hosts data on Amazon Web Services (AWS) infrastructure with a primary region in Sweden (EU). However, AWS operates globally and some data may be processed on infrastructure outside the EEA as part of normal cloud operations.

If you are located in the **European Economic Area (EEA) or the United Kingdom**, any transfer of your data to a third country is conducted under appropriate safeguards, including Standard Contractual Clauses (SCCs) as approved by the European Commission and UK Information Commissioner's Office (ICO).

If you are located in other jurisdictions, please refer to Section 7 for your applicable rights.

By using the App, you acknowledge that your data may be transferred to and processed in countries outside your country of residence.

---

## 4. Data Retention & Account Deletion

We retain your personal information for as long as your account is active.

**How to delete your account and data:**

Under App Store and Google Play regulations, you have the right to delete your account and associated data at any time. You can do this by:

1. Navigating to **Settings** within the App and selecting **"Delete Account."**
2. Alternatively, emailing us at **privacy@yourcompany.com** with the subject line "Data Deletion Request."

Once a deletion request is processed, your account data will be permanently removed from our active databases (Supabase) within **30 days**. Anonymised or aggregated data that cannot reasonably be used to identify you may be retained indefinitely.

Crashlytics crash report data is retained for up to **90 days** from collection.

---

## 5. Security

We use **Supabase** for database management, which employs industry-standard encryption (AES-256 at rest, TLS in transit) and security protocols. Access to your data is restricted to authorised personnel only.

No method of transmission over the internet is 100% secure, and we cannot guarantee absolute security. We will notify you of any personal data breach as required by applicable law (for example, within 72 hours to the relevant supervisory authority under GDPR, and to affected individuals where required).

---

## 6. Website

### 6.1 Contact Form

When you submit a message via the contact form on the Site, we collect your **email address** and the **content of your message**. This information is used solely to respond to your enquiry and is not added to any mailing list or used for marketing purposes without your separate consent.

We retain contact form submissions for up to **12 months**, after which they are deleted. The legal basis for this processing is our legitimate interest in responding to enquiries.

### 6.2 Website Cookies

The Site uses only **strictly necessary cookies** — small text files placed on your device that are essential for the Site to function. These include session and security tokens used to protect the contact form from abuse (e.g. CSRF protection). These cookies do not track you and do not require your consent under UK/EU GDPR.

We do not currently use analytics, advertising, or tracking cookies on the Site.

---

## 7. Your Privacy Rights

Your rights depend on where you live. To exercise any of these rights, email us at **privacy@yourcompany.com**. We will respond within the timeframe required by your applicable law (generally 30 days, with the possibility of extension in complex cases).

### 7.1 EEA and UK Residents (GDPR / UK GDPR)

- **Access:** Request a copy of the personal data we hold about you.
- **Rectification:** Request that we correct inaccurate data.
- **Erasure:** Request that we delete your data ("right to be forgotten").
- **Data portability:** Request your data in a structured, machine-readable format.
- **Restriction:** Request that we restrict how we process your data.
- **Objection:** Object to processing based on legitimate interests.
- **Withdraw consent:** Where processing is based on consent, withdraw it at any time without affecting prior processing.

You also have the right to lodge a complaint with your local supervisory authority (e.g., the UK ICO at [ico.org.uk](https://ico.org.uk) or your national EU Data Protection Authority).

### 7.2 California Residents (CCPA/CPRA)

- **Know:** Request disclosure of the categories and specific pieces of personal information we have collected about you.
- **Delete:** Request deletion of your personal information.
- **Correct:** Request correction of inaccurate personal information.
- **Opt out of sale/sharing:** We do not currently sell or share personal information for cross-context behavioural advertising. If this changes, we will provide a "Do Not Sell or Share My Personal Information" mechanism.
- **Non-discrimination:** We will not discriminate against you for exercising your CCPA rights.

### 7.3 Brazil Residents (LGPD)

Under Brazil's Lei Geral de Proteção de Dados (LGPD), you have the right to: confirm whether we process your data; access your data; correct incomplete or inaccurate data; anonymise, block, or delete unnecessary data; request data portability; be informed about third parties with whom we share data; and withdraw consent at any time. To exercise these rights, contact us at **privacy@yourcompany.com**.

### 7.4 Canadian Residents (PIPEDA / Quebec Law 25)

Under Canada's Personal Information Protection and Electronic Documents Act (PIPEDA) and, if applicable, Quebec's Law 25, you have the right to access and correct your personal information, and to withdraw consent to its collection or use (subject to legal or contractual restrictions). You may also lodge a complaint with the Office of the Privacy Commissioner of Canada at [priv.gc.ca](https://www.priv.gc.ca).

### 7.5 Australian Residents (Privacy Act 1988)

Under Australia's Privacy Act 1988 (Cth) and the Australian Privacy Principles (APPs), you have the right to access and correct the personal information we hold about you. You may also lodge a complaint with the Office of the Australian Information Commissioner (OAIC) at [oaic.gov.au](https://www.oaic.gov.au) if you believe we have mishandled your data.

### 7.6 All Other Users

Regardless of your location, you may contact us at any time to request access to, correction of, or deletion of your personal data. We will endeavour to honour such requests in line with our technical capabilities and applicable legal obligations.

---

## 8. Children's Privacy

The App is not directed to children. The minimum age to use the App is **13 years old**, or the higher minimum age required in your jurisdiction (for example, 16 in certain EU member states, or 14 in Brazil and South Korea). We do not knowingly collect personal information from anyone below the applicable minimum age. If we discover that we have collected data from an underage user, we will delete it promptly.

If you are a parent or guardian and believe your child has provided us with personal data, please contact us at **privacy@yourcompany.com**.

---

## 9. Changes to This Policy

We may update this Privacy Policy from time to time. We will notify you of **material changes** by posting the updated Policy within the App or by email, and we will update the "Last Updated" date at the top. Continued use of the App after such changes constitutes your acceptance of the updated Policy. We encourage you to review this Policy periodically.

---

## 10. Contact Us

If you have any questions, requests, or complaints about this Privacy Policy or how we handle your data, please contact us at:

**Email:** privacy@yourcompany.com

This Privacy Policy covers both the My App mobile application and the My Company Ltd website. If your enquiry relates specifically to the website contact form, the same email address applies.