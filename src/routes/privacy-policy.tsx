import { createFileRoute } from '@tanstack/react-router'
import { LegalPage } from '../components/LegalPage'
import { business } from '../data/business'
import { getSeoHead } from '../lib/seo'

export const Route = createFileRoute('/privacy-policy')({
  head: () => getSeoHead({ title: 'Privacy Policy | DecksRXKC', description: 'How DecksRXKC handles quote requests, contact information, website usage data, and advertising inquiries, and how to contact us about privacy.', path: '/privacy-policy' }),
  component: PrivacyPage,
})

function PrivacyPage() {
  return <LegalPage title="Privacy Policy" intro="How we handle information when you visit our website, request a quote, or contact DecksRXKC." sections={[
    { title: 'Who this policy covers', content: <p>This policy describes information handling for DecksRXKC at decksrxkc.com and inquiries submitted to our business through advertising forms. For privacy questions, call <a href={`tel:${business.phone}`}>{business.phoneDisplay}</a> or use our <a href="/contact">contact form</a>.</p> },
    { title: 'Information we collect', content: <>
      <p>When you request a quote, the website form collects your name, phone number, city, project type, and preferred timeline. Email and project notes are optional. We also receive information you choose to share when discussing a project, such as its address or existing condition.</p>
      <p>The quote form stores the page where the request was submitted and a submission identifier with your inquiry. Website hosting and third-party services may receive technical information such as your IP address, browser, device, referring page, and visit time.</p>
      <p>If you submit a Google-hosted lead form for DecksRXKC, we receive the information you submit through that form. Google also handles your submission under its own <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">privacy policy</a>.</p>
      <p>Please do not include payment-card details, government identification numbers, medical information, or other sensitive personal information in a quote request.</p>
    </> },
    { title: 'How information is used', content: <ul>
      <li>Respond to inquiries and contact you about your requested project.</li>
      <li>Understand the location, scope, timing, and practical requirements of a quote.</li>
      <li>Coordinate project discussions and maintain inquiry and project records.</li>
      <li>Operate, secure, troubleshoot, and improve the website.</li>
      <li>Measure website and advertising performance when measurement tools are enabled.</li>
    </ul> },
    { title: 'Service providers and disclosures', content: <>
      <p>The website is hosted through Netlify, and website quote requests are collected and stored using Netlify Forms. New inquiries may also be delivered to our business by email. Providers helping operate our website, manage inquiries, or measure advertising may process information needed to provide those services. Google processes information associated with its advertising, maps, and analytics services under its own policies.</p>
      <p>Information may also be disclosed when required by law or when necessary to address fraud, security issues, or protect legal rights. This policy does not cover the independent practices of third-party websites or services.</p>
    </> },
    { title: 'Cookies, analytics, and advertising', content: <>
      <p>When enabled, Google Analytics and Google Ads measurement tools may use cookies or similar technologies to measure visits, quote inquiries, call-link interactions, and advertising results. These tools may receive device, browser, page, referral, and advertising-click information. A click on a phone link indicates an interaction and does not by itself establish that a call was completed.</p>
      <p>Embedded Google Maps and links to Google services may also involve Google receiving information about your browser and interaction. Read <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noreferrer">how Google uses information from sites using its services</a>.</p>
      <p>You can manage cookies through your browser settings, adjust Google advertising preferences at <a href="https://myadcenter.google.com/" target="_blank" rel="noreferrer">My Ad Center</a>, or use the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noreferrer">Google Analytics opt-out browser add-on</a>. These choices do not remove an inquiry you have already submitted. The website does not currently change its behavior in response to browser Do Not Track signals.</p>
    </> },
    { title: 'Storage and security', content: <>
      <p>Inquiry and project records may be retained to respond to requests, support ongoing work, maintain business records, or meet legal obligations. Retention depends on the purpose of the record; submitting a form does not schedule automatic deletion.</p>
      <p>The website uses HTTPS, and access to quote submissions is restricted to authorized account users. No internet transmission or storage system can be guaranteed completely secure. Service providers may process information in the United States or other locations where they operate.</p>
    </> },
    { title: 'Your choices and requests', content: <>
      <p>You can choose not to submit a form, leave optional fields blank, or call us instead. To request access to, correction of, or deletion of inquiry information, or to ask us to stop contacting you, call {business.phoneDisplay} or use our <a href="/contact">contact form</a>. We may need to verify your identity before acting on a request. Applicable legal requirements or records needed for an ongoing project may affect what can be deleted.</p>
      <p>The website and services are intended for adults arranging home-improvement projects, not for children under 13. Contact us if you believe a child has submitted personal information so we can address the request.</p>
    </> },
    { title: 'Policy updates', content: <p>We may update this page as the website or information practices change. The date above identifies the latest revision. Our <a href="/terms-and-conditions">Terms and Conditions</a> explain website use and quote requests.</p> },
  ]} />
}
