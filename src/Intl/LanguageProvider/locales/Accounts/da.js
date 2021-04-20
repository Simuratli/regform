import React from "react";
import { FormattedMessage } from "react-intl";

const translations = {
  download: "Download DA",
  open: "open DA",
  ok: "ok DA",
  free: "FREE DA",
  downloads: "downloads DA",
  openings: "openings DA",
  price: "price DA",
  "virtual.machine.text":
    "*UDS Virtual Machine exceeds 17.2 GB. <br /> We recommend using Download Master to avoid breakdowns. DA",
  "free.of.charge": "Free of charge until April, 2021 DA",
  "about.add.on": "About add-on DA",
  "how.to.install.and.uninstall": "How to install and uninstall DA",
  "dmt.text":
    "We designed UDS Data Migration Tool as an online solution with an intuitively comprehensive and convenient interface and functionality. Yet, for a better experience, we recommend the video tutorial first. DA",
  "installation.guide": " Installation guide DA",
  "for.faultless.user.experience":
    "for a faultless user experience. <br /> Download DA",
  hints: "hints DA",
  "for.safari.users": " for Safari users.  DA",
  "how.to.use": "How to use DA",
  "ready.to.get.started": "Ready to get started?  DA",
  "need.help": "Need help? DA",
  "need.help.text":
    "Are you experiencing any difficulties? - Be sure that we are ready to help you. DA",
  "back.home.page": "Back to the home page DA",
  "recomend.text":
    "We recommend using the desktop version to download and use any UDS product. DA",
  "present.mobile.v":
    "The present mobile version provides general information about UDS services and products. DA",
  "enhance.system.text": "Enhance your system with Dynamics 365 add-ons DA",
  "improve.dynamics.text":
    "UDS team aims to iron out difficulties that an average Dynamics 365 user usually faces. That is why we bring to life easy-to-use smart solutions to guarantee you convenience. DA",
  links: "Links DA",
  "UDS.website": "UDS Website DA",
  "add.ons": "Add-ons DA",
  "contact.us": "Contact Us DA",
  "UDS.systems.reserved": "UDS Systems © 2020 All Rights reserved DA",
  "privacy.policy": "Privacy Policy DA",
  "terms.and.conditions": "Terms and conditions DA",
  "book.call": "Book a call DA",
  "more.info": "More info DA",

  // ERRORS,

  "err.400": `<div>
                 <div>The server cannot process the client request.</div>
                 <div>It might be either malformed or illegal.</div>
            </div>`,

  "err.403": `<div>You do not have permission to access the document or page you requested.</div>`,
  "err.404": `<div>Sorry, the page you are looking for does not exist.</div>`,
  "err.415": `<div>
                 <div><b>Current media type is unsupported:</b> .mp3, .mp4 </div>
                 <div><b>Available media types:</b> .pdf, .docx </div>
                 <div>To prevent errors, use only the available media types listed above.</div>
             </div>`,

  "err.500": `<div>
                 <div>Sorry, something went wrong on our end.</div>
                 <div>We are currently trying to fix the problem.</div>
             </div>`,

  "err.501": `<div>Sorry, something went wrong on our end.</div>`,

  // Privacy page

  "privacy.page": `<section>
       <h2>WELCOME TO OUR PRIVACY POLICY</h2>
 <h5>YOUR PRIVACY IS CRITICALLY IMPORTANT TO US.</h5>
 <p>UDS Systems is located at:</p>
<ul>
  <li>UDS Systems</li>
  <li>Lobanovsky Ave. Kyiv city</li>
  <li>03118 - Kyiv , Ukraine</li>
  <li>380953839341</li>
</ul>
//
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
</section>`,

  // TERMS PAGE

  "terms.page": `<section>
        <h2>WELCOME TO UDS SYSTEMS</h2>
        <p>
          These terms and conditions outline the rules and regulations for the
          use of UDS Systems's Website.
        </p>
        <p>UDS Systems is located at:</p>
        <ul>
          <li>UDS Systems</li>
          <li>Lobanovsky Ave. Kyiv city</li>
          <li>03118 - Kyiv , Ukraine</li>
          <li>380953839341</li>
        </ul>

        <p>
          By accessing this website we assume you accept these terms and
          conditions in full. Do not continue to use UDS Systems's website if
          you do not accept all of the terms and conditions stated on this page.
        </p>
        <p>
          The following terminology applies to these Terms and Conditions,
          Privacy Statement and Disclaimer Notice and any or all Agreements:
          "Client", "You" and "Your" refers to you, the person accessing this
          website and accepting the Company's terms and conditions. "The
          Company", "Ourselves", "We", "Our" and "Us", refers to our Company.
          "Party", "Parties", or "Us", refers to both the Client and ourselves,
          or either the Client or ourselves. All terms refer to the offer,
          acceptance and consideration of payment necessary to undertake the
          process of our assistance to the Client in the most appropriate
          manner, whether by formal meetings of a fixed duration, or any other
          means, for the express purpose of meeting the Client's needs in
          respect of provision of the Company's stated services/products, in
          accordance with and subject to, prevailing law of Ukraine. Any use of
          the above terminology or other words in the singular, plural,
          capitalisation and/or he/she or they, are taken as interchangeable and
          therefore as referring to same.
        </p>
      </section>
      <section>
        <h3>Cookies</h3>
        <p>
          We employ the use of cookies. By using UDS Systems's website you
          consent to the use of cookies in accordance with UDS Systems's privacy
          policy.
        </p>

        <p>
          Most of the modern day interactive web sites use cookies to enable us
          to retrieve user details for each visit. Cookies are used in some
          areas of our site to enable the functionality of this area and ease of
          use for those people visiting. Some of our affiliate / advertising
          partners may also use cookies.
        </p>
      </section>
      <section>
        <h3>License</h3>

        <p>
          Unless otherwise stated, UDS Systems and/or it's licensors own the
          intellectual property rights for all material on UDS Systems. All
          intellectual property rights are reserved. You may view and/or print
          pages from https://uds.systems/ for your own personal use subject to
          restrictions set in these terms and conditions.
        </p>

        <ol>
          <p>You must not:</p>
          <li>Republish material from https://uds.systems/</li>
          <li>Sell, rent or sub-license material from https://uds.systems/</li>
          <li>
            Reproduce, duplicate or copy material from https://uds.systems/
          </li>
        </ol>
        <p>
          Redistribute content from UDS Systems (unless content is specifically
          made for redistribution).
        </p>
      </section>
      <section>
        <h3>Hyperlinking to our Content</h3>
        <ol>
          <li>
            The following organizations may link to our Web site without prior
            written approval:
            <ol>
              <li>Government agencies;</li>
              <li>Search engines;</li>
              <li>News organizations;</li>
              <li>
                Online directory distributors when they list us in the directory
                may link to our Web site in the same manner as they hyperlink to
                the Web sites of other listed businesses;
              </li>
              <li>
                System wide Accredited Businesses except soliciting non-profit
                organizations, charity shopping malls, and charity fundraising
                groups which may not hyperlink to our Web site.
              </li>
            </ol>
          </li>
          <li>
            These organizations may link to our home page, to publications or to
            other Web site information so long as the link: (a) is not in any
            way misleading; (b) does not falsely imply sponsorship, endorsement
            or approval of the linking party and its products or services; and
            (c) fits within the context of the linking party's site.
          </li>
          <li>
            We may consider and approve in our sole discretion other link
            requests from the following types of organizations:
            <ol>
              <li>
                commonly-known consumer and/or business information sources such
                as Chambers of Commerce, American Automobile Association, AARP
                and Consumers Union;
              </li>
              <li>dot.com community sites;</li>
              <li>
                associations or other groups representing charities, including
                charity giving sites;
              </li>
              <li>online directory distributors;</li>
              <li>internet portals;</li>
              <li>
                accounting, law and consulting firms whose primary clients are
                businesses;
              </li>
              <li>educational institutions and trade associations.</li>
            </ol>
          </li>
        </ol>

        <p>
          We will approve link requests from these organizations if we determine
          that: (a) the link would not reflect unfavorably on us or our
          accredited businesses (for example, trade associations or other
          organizations representing inherently suspect types of business, such
          as work-at-home opportunities, shall not be allowed to link); (b)the
          organization does not have an unsatisfactory record with us; (c) the
          benefit to us from the visibility associated with the hyperlink
          outweighs the absence of !!!!! and (d) where the link is in the
          context of general resource information or is otherwise consistent
          with editorial content in a newsletter or similar product furthering
          the mission of the organization.
        </p>

        <p>
          These organizations may link to our home page, to publications or to
          other Web site information so long as the link: (a) is not in any way
          misleading; (b) does not falsely imply sponsorship, endorsement or
          approval of the linking party and it products or services; and (c)
          fits within the context of the linking party's site.
        </p>

        <p>
          If you are among the organizations listed in paragraph 2 above and are
          interested in linking to our website, you must notify us by sending an
          e-mail to info@uds.systems. Please include your name, your
          organization name, contact information (such as a phone number and/or
          e-mail address) as well as the URL of your site, a list of any URLs
          from which you intend to link to our Web site, and a list of the
          URL(s) on our site to which you would like to link. Allow 2-3 weeks
          for a response.
        </p>
        <p>Approved organizations may hyperlink to our Web site as follows:</p>
        <ol>
          <li>By use of our corporate name;</li>
          <li>
            By use of the uniform resource locator (Web address) being linked
            to;
          </li>
          <li>
            By use of any other description of our Web site or material being
            linked to that makes sense within the context and format of content
            on the linking party's site.
          </li>
        </ol>
        <p>
          No use of UDS Systems's logo or other artwork will be allowed for
          linking absent a trademark license agreement.
        </p>
      </section>
      <section>
        <h3>Iframes</h3>
        <p>
          Without prior approval and express written permission, you may not
          create frames around our Web pages or use other techniques that alter
          in any way the visual presentation or appearance of our Web site.
        </p>
      </section>

      <section>
        <h3>Reservation of Rights</h3>
        <p>
          We reserve the right at any time and in its sole discretion to request
          that you remove all links or any particular link to our Web site. You
          agree to immediately remove all links to our Web site upon such
          request. We also reserve the right to amend these terms and conditions
          and its linking policy at any time. By continuing to link to our Web
          site, you agree to be bound to and abide by these linking terms and
          conditions.
        </p>
      </section>
      <section>
        <h3>Removal of links from our website</h3>
        <p>
          If you find any link on our Web site or any linked web site
          objectionable for any reason, you may contact us about this. We will
          consider requests to remove links but will have no obligation to do so
          or to respond directly to you.
        </p>
        <p>
          Whilst we endeavour to ensure that the information on this website is
          correct, we do not warrant its completeness or accuracy; nor do we
          commit to ensuring that the website remains available or that the
          material on the website is kept up to date.
        </p>
      </section>
      <section>
        <h3>Content Liability</h3>
        <p>
          We shall have no responsibility or liability for any content appearing
          on your Web site. You agree to indemnify and defend us against all
          claims arising out of or based upon your Website. No link(s) may
          appear on any page on your Web site or within any context containing
          content or materials that may be interpreted as libelous, obscene or
          criminal, or which infringes, otherwise violates, or advocates the
          infringement or other violation of, any third party rights.
        </p>
      </section>
      <section>
        <h3>Disclaimer</h3>
        <p>
          To the maximum extent permitted by applicable law, we exclude all
          representations, warranties and conditions relating to our website and
          the use of this website (including, without limitation, any warranties
          implied by law in respect of satisfactory quality, fitness for purpose
          and/or the use of reasonable care and skill). Nothing in this
          disclaimer will:
        </p>
        <ol>
          <li>
            limit or exclude our or your liability for death or personal injury
            resulting from negligence;
          </li>
          <li>
            limit or exclude our or your liability for fraud or fraudulent
            misrepresentation;
          </li>
          <li>
            limit any of our or your liabilities in any way that is not
            permitted under applicable law;
          </li>
          <li>
            exclude any of our or your liabilities that may not be excluded
            under applicable law.
          </li>
        </ol>
        <p>
          The limitations and exclusions of liability set out in this Section
          and elsewhere in this disclaimer: (a) are subject to the preceding
          paragraph; and (b) govern all liabilities arising under the disclaimer
          or in relation to the subject matter of this disclaimer, including
          liabilities arising in contract, in tort (including negligence) and
          for breach of statutory duty.
        </p>
        <p>
          To the extent that the website and the information and services on the
          website are provided free of charge, we will not be liable for any
          loss or damage of any nature.
        </p>
      </section>
      <section>
        <h3>Credit & Contact Information</h3>
        <p>
          If you have any questions, please contact us via
          <a href={"mailto:info@uds.systems"}>email</a> or
          <a href={"tel:+380953839341"}>phone</a>.
        </p>
      </section>`,
};

export default translations;
