import { createFileRoute } from '@tanstack/react-router'
import { LegalPage } from '../components/LegalPage'
import { business } from '../data/business'
import { getSeoHead } from '../lib/seo'

export const Route = createFileRoute('/terms-and-conditions')({
  head: () => getSeoHead({ title: 'Terms and Conditions | DecksRXKC', description: 'Terms for using the DecksRXKC website, requesting a deck quote, viewing project information, and contacting our Kansas City team.', path: '/terms-and-conditions' }),
  component: TermsPage,
})

function TermsPage() {
  return <LegalPage title="Terms and Conditions" intro="Information about using our website and starting a project conversation with DecksRXKC." sections={[
    { title: 'Website purpose', content: <p>Decksrxkc.com provides information about DecksRXKC services, example projects, service areas, and ways to request a quote. These terms concern website use. Project-specific scope, pricing, payment, scheduling, warranty, and cancellation terms belong in a separate project agreement.</p> },
    { title: 'Quote requests and project agreements', content: <>
      <p>Submitting a website or advertising form starts an inquiry. It does not purchase a service, reserve a construction date, approve a project, or create a construction contract. A form confirmation indicates receipt of the request, not acceptance of the work.</p>
      <p>Project pricing and timing depend on the site, scope, materials, condition, access, permits, and other project details. Confirm the proposed work and terms directly with DecksRXKC before making decisions or commitments. A separate project agreement governs any work the parties agree to perform.</p>
    </> },
    { title: 'Information and project examples', content: <>
      <p>Service descriptions, photos, guides, reviews, and project examples provide general context. An example project does not guarantee the same design, materials, price, duration, or result for another property. Availability and website information may change.</p>
      <p>Guides do not replace an on-site assessment, engineering advice, local permit requirements, applicable codes, or professional judgment. Do not rely on website content alone to assess structural safety or carry out construction work.</p>
    </> },
    { title: 'Appropriate website use', content: <ul>
      <li>Provide accurate contact and project information and submit information you are authorized to share.</li>
      <li>Do not submit unlawful content, impersonate another person, or use forms to send spam.</li>
      <li>Do not attempt to access private systems or records, bypass access controls, or interfere with the website.</li>
      <li>Do not copy or republish website photographs, written content, or branding for commercial use without permission from the relevant rights holder.</li>
    </ul> },
    { title: 'Inquiries and communications', content: <p>Providing contact details allows DecksRXKC to respond about your inquiry using those details. A quote request does not by itself enroll you in an unrelated marketing subscription. If you prefer a contact method or no longer want follow-up about your inquiry, tell us when submitting your request or contact us directly.</p> },
    { title: 'Privacy and third-party services', content: <>
      <p>Our <a href="/privacy-policy">Privacy Policy</a> explains how inquiry information and website usage data are handled. Please avoid sending sensitive personal information through quote forms.</p>
      <p>Links, maps, reviews, and other features may lead to third-party services, including Google. Those services have their own terms and privacy policies. DecksRXKC does not control their availability or independent content.</p>
    </> },
    { title: 'Website availability and corrections', content: <p>The website may be unavailable during maintenance or technical issues, and information may contain errors or become outdated. If a form fails or you need to confirm a detail, call <a href={`tel:${business.phone}`}>{business.phoneDisplay}</a>. These website terms do not change rights or protections provided by applicable law or a separate project agreement.</p> },
    { title: 'Updates and questions', content: <p>We may revise these website terms, with the latest revision date shown above. Changes to website terms do not automatically change an existing project agreement. For questions, call {business.phoneDisplay} or use our <a href="/contact">contact form</a>.</p> },
  ]} />
}
