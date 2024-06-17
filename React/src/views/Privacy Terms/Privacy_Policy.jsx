import React from 'react';

function PrivacyPolicy() {
    return (
        <>
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-semibold mb-4">Privacy Policy</h1>

                <p className="mb-4">
                    Effective Date: [Insert Date]
                </p>

                <p className="mb-4">
                    AfricaExpress is committed to protecting your privacy. This Privacy Policy explains how we collect,
                    use, disclose, and safeguard your information when you visit our website [www.africaexpress.com]
                    (the "Site") and use our services.
                </p>

                <p className="mb-4">
                    Please read this privacy policy carefully. If you do not agree with the terms of this privacy
                    policy, please do not access the Site or use our services.
                </p>

                <h2 className="text-xl font-semibold mb-2">1. Information We Collect</h2>

                <p className="mb-4">
                    <strong>1.1. Personal Information</strong><br />
                    We may collect personally identifiable information that you voluntarily provide to us when you
                    register on the Site, place an order, subscribe to our newsletter, respond to a survey, fill out a
                    form, or otherwise contact us. The types of personal information we may collect include, but are
                    not limited to:
                    <ul className="list-disc pl-8">
                        <li>Name</li>
                        <li>Contact information including email address and phone number</li>
                        <li>Demographic information such as postcode, preferences, and interests</li>
                        <li>Payment information (e.g., credit card details) when you make a purchase</li>
                    </ul>
                </p>

                <p className="mb-4">
                    <strong>1.2. Non-Personal Information</strong><br />
                    We may also collect non-personal information about you automatically when you access and use the
                    Site. This information may include your IP address, browser type, domain names, access times, and
                    referring website addresses. This information is used for the operation of the service, to maintain
                    the quality of the service, and to provide general statistics regarding the use of the Site.
                </p>

                {/* Add more sections as needed */}

                <h2 className="text-xl font-semibold mb-2">2. Use of Information</h2>

                <p className="mb-4">
                    {/* Explain how information collected is used */}
                </p>

                <h2 className="text-xl font-semibold mb-2">3. Security of Your Information</h2>

                <p className="mb-4">
                    {/* Explain security measures */}
                </p>

                <h2 className="text-xl font-semibold mb-2">4. Your Choices and Rights</h2>

                <p className="mb-4">
                    {/* Explain user rights */}
                </p>

                <h2 className="text-xl font-semibold mb-2">5. Changes to This Privacy Policy</h2>

                <p className="mb-4">
                    {/* Explain how changes to the policy will be communicated */}
                </p>

                <h2 className="text-xl font-semibold mb-2">6. Contact Us</h2>

                <p className="mb-4">
                    If you have any questions about this Privacy Policy, please contact us at:
                    <br />
                    AfricaExpress
                    <br />
                    [Address Line 1]
                    <br />
                    [Address Line 2]
                    <br />
                    [City, State, Zip Code]
                    <br />
                    [Country]
                    <br />
                    Email: [email@example.com]
                    <br />
                    Phone: [+1234567890]
                </p>
            </div>
        </>
    );
}

export default PrivacyPolicy;
