import React, {useEffect} from "react";
import '../../scss/privacyAndTerms/privacyAndTerms.scss';

function Privacy(props) {
    useEffect(() => {
        document.title = "UDS Portal - Privacy Policy"
    }, []);
    return (
        <div className={'privacyContainer'}>
            <section>
                <h2>WELCOME TO OUR PRIVACY POLICY</h2>
                <h5>YOUR PRIVACY IS CRITICALLY IMPORTANT TO US.</h5>
                <p>UDS Systems is located at:</p>
                <ul>
                    <li>UDS Systems</li>
                    <li>Lobanovsky Ave. Kyiv city</li>
                    <li>03118 - Kyiv , Ukraine</li>
                    <li>380953839341</li>
                </ul>

                <p>It is UDS Systems's policy to respect your privacy regarding any information we may collect while
                    operating our website.
                    This Privacy Policy applies to https://uds.systems/ (hereinafter, "us", "we", or
                    "https://uds.systems/").
                    We respect your privacy and are committed to protecting personally identifiable
                    information you may provide us through the Website. We have adopted this privacy policy
                    ("Privacy Policy") to explain what information may be collected on our Website, how we use
                    this information, and under what circumstances we may disclose
                    the information to third parties. This Privacy Policy applies only to information we collect through
                    the Website and does not apply to our collection of information from other sources.
                </p>
                <p>
                    This Privacy Policy, together with the Terms and conditions posted on our Website,
                    set forth the general rules and policies governing your use of our Website. Depending
                    on your activities when visiting our Website, you may be required to agree to
                    additional terms and conditions.
                </p>
            </section>
            <section>
                <h3>Website Visitors</h3>
                <p>Like most website operators, UDS Systems collects non-personally-identifying
                    information of the sort that web browsers and servers typically make available,
                    such as the browser type, language preference, referring site, and the date and
                    time of each visitor request. UDS Systems's purpose in collecting non-personally
                    identifying information is to better understand how UDS Systems's visitors use its website.
                    From time to time, UDS Systems may release non-personally-identifying information
                    in the aggregate, e.g., by publishing a report on trends in the usage of its website.</p>

                <p>UDS Systems also collects potentially personally-identifying information like Internet Protocol
                    (IP) addresses for logged in users and for users leaving comments on https://uds.systems/ blog posts.
                    UDS Systems only discloses logged in user and commenter IP addresses under the same circumstances
                    that it uses and discloses personally-identifying information as described below.</p>
            </section>
            <section>
                <h3>Gathering of Personally-Identifying Information</h3>

                <p>Certain visitors to UDS Systems's websites choose to interact with UDS Systems in ways that
                    require UDS Systems to gather personally-identifying information. The amount and type of
                    information that UDS Systems gathers depends on the nature of the interaction. For example,
                    we ask visitors who sign up for a blog at https://uds.systems/ to provide a username and
                    email address.</p>
            </section>
            <section>
                <h3>Security</h3>
                <p>The security of your Personal Information is important to us, but remember that no
                    method of transmission over the Internet, or method of electronic storage is 100% secure.
                    While we strive to use commercially acceptable means to protect your Personal Information,
                    we cannot guarantee its absolute security.</p>
            </section>
            <section>
                <h3>Advertisements</h3>
                <p>Ads appearing on our website may be delivered to users by advertising partners, who may set cookies.
                    These cookies allow the ad server to recognize your computer each time they send you an online
                    advertisement to compile information about you or others who use your computer. This information
                    allows ad networks to, among other things, deliver targeted advertisements that they believe will
                    be of most interest to you. This Privacy Policy covers the use of cookies by UDS Systems and
                    does not cover the use of cookies by any advertisers.</p>
            </section>
            <section>
                <h3>Links To External Sites</h3>
                <p>Our Service may contain links to external sites that are not operated by us. If you click on a third
                    party link, you will be directed to that third party's site. We strongly advise you to review
                    the Privacy Policy and terms and conditions of every site you visit.</p>
                <p>We have no control over, and assume no responsibility for the content, privacy policies or
                    practices of any third party sites, products or services.</p>
            </section>
            <section>
                <h3>https://uds.systems/ uses Google AdWords for remarketing</h3>
                <p>https://uds.systems/ uses the remarketing services to advertise on third party websites
                    (including Google) to previous visitors to our site. It could mean that we advertise to
                    previous visitors who haven't completed a task on our site, for example using the contact
                    form to make an enquiry. This could be in the form of an advertisement on the Google search
                    results page, or a site in the Google Display Network. Third-party vendors, including Google,
                    use cookies to serve ads based on someone's past visits. Of course, any data collected will
                    be used in accordance with our own privacy policy and Google's privacy policy.</p>
                <p>You can set preferences for how Google advertises to you using the Google Ad Preferences
                    page, and if you want to you can opt out of interest-based advertising entirely
                    by cookie settings or permanently using a browser plugin.</p>
            </section>
            <section>
                <h3>Aggregated Statistics</h3>
                <p>UDS Systems may collect statistics about the behavior of visitors to its website.
                    UDS Systems may display this information publicly or provide it to others.
                    However, UDS Systems does not disclose your personally-identifying information.</p>
            </section>
            <section>
                <h3>Affiliate Disclosure</h3>
                <p>This site uses affiliate links and does earn a commission from certain links. This does not affect
                    your purchases or the price you may pay.</p>
            </section>
            <section>
                <h3>Cookies</h3>
                <p>To enrich and perfect your online experience, UDS Systems uses "Cookies",
                    similar technologies and services provided by others to display personalized content,
                    appropriate advertising and store your preferences on your computer.</p>
                <p>A cookie is a string of information that a website stores on a visitor's computer, and that the
                    visitor's browser provides to the website each time the visitor returns. UDS Systems uses cookies
                    to help UDS Systems identify and track visitors, their usage of https://uds.systems/, and their
                    website access preferences. UDS Systems visitors who do not wish to have cookies placed on their
                    computers should set their browsers to refuse cookies before using UDS Systems's websites,
                    with the drawback that certain features of UDS Systems's websites may not function properly
                    without the aid of cookies.</p>
                <p>By continuing to navigate our website without changing your cookie settings,
                    you hereby acknowledge and agree to UDS Systems's use of cookies.</p>
            </section>
            <section>
                <h3>Privacy Policy Changes</h3>
                <p>Although most changes are likely to be minor, UDS Systems may change its Privacy
                    Policy from time to time, and in UDS Systems's sole discretion. UDS Systems
                    encourages visitors to frequently check this page for any changes to its Privacy Policy.
                    Your continued use of this site after any change in this Privacy Policy will constitute
                    your acceptance of such change.</p>
            </section>
            <section>
                <h3>Credit & Contact Information</h3>
                <p>If you have any questions, please contact us via <a href={'mailto:info@uds.systems'}>email</a> or <a href={'tel:+380953839341'}>phone</a>.</p>
            </section>
        </div>
    )
}

export default Privacy;