import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './terms.css'

const Terms = (props) => {
  return (
    <div className="terms-container">
      <Helmet>
        <title>Terms - Shift Landing</title>
        <meta property="og:title" content="Terms - Shift Landing" />
      </Helmet>
      <div className="terms-hero">
        <img
          alt="image"
          src="https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE2fHxibHVlJTIwdGVjaCUyMGFic3RyYWN0fGVufDB8fHx8MTY5NDcwOTg2M3ww&amp;ixlib=rb-4.0.3&amp;h=800"
          className="terms-image"
        />
        <div className="terms-container1">
          <Link to="/" className="terms-navlink">
            <img
              alt="image"
              src="/external/shiftlogo%20copy-200w.png"
              className="terms-image1"
            />
          </Link>
          <h1 className="terms-text">Terms and Conditions</h1>
          <h3 className="terms-text001">
            The conditions of growth and the terms of our future
          </h3>
        </div>
      </div>
      <div className="terms-container2">
        <span className="terms-text002">
          <span className="terms-text003">TERMS AND CONDITIONS</span>
          <br className="terms-text004"></br>
          <span>
            These terms and conditions (the &quot;Terms and Conditions&quot;)
            govern the use of https://shiftech.io (the
          </span>
          <br className="terms-text006"></br>
          <span>
            &quot;Site&quot;). This Site is owned and operated by Shift
            Technologies. This Site is a portfolio.
          </span>
          <br className="terms-text008"></br>
          <span>
            By using this Site, you indicate that you have read and understand
            these Terms and Conditions and agree to abide by them at all times.
          </span>
          <br className="terms-text010"></br>
          <br className="terms-text011"></br>
          <span>
            THESE TERMS AND CONDITIONS CONTAIN A DISPUTE RESOLUTION CLAUSE THAT
            IMPACTS YOUR RIGHTS ABOUT HOW TO RESOLVE DISPUTES. PLEASE READ IT
            CAREFULLY.
          </span>
          <br className="terms-text013"></br>
          <br className="terms-text014"></br>
          <span className="terms-text015">Intellectual Property</span>
          <br className="terms-text016"></br>
          <span>
            All content published and made available on our Site is the property
            of Shift Technologies and the Site&apos;s creators. This includes,
            but is not limited to images, text, logos, documents, downloadable
            files and anything that contributes to the composition of our Site.
          </span>
          <br className="terms-text018"></br>
          <br className="terms-text019"></br>
          <span className="terms-text020">Age Restrictions</span>
          <br className="terms-text021"></br>
          <span>
            The minimum age to use our Site is 16 years old. By using this Site,
            users agree that they are over 16 years old. We do not assume any
            legal responsibility for false statements about age.
          </span>
          <br className="terms-text023"></br>
          <br className="terms-text024"></br>
          <span className="terms-text025">User Contributions</span>
          <br className="terms-text026"></br>
          <span>Users may post the following information on our Site:</span>
          <br className="terms-text028"></br>
          <br className="terms-text029"></br>
          <span>- Public comments; and</span>
          <br className="terms-text031"></br>
          <br className="terms-text032"></br>
          <span>- Employment Opportunities.</span>
          <br className="terms-text034"></br>
          <br className="terms-text035"></br>
          <span>
            By posting publicly on our Site, you agree not to act illegally or
            violate these Terms and Conditions.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <br></br>
          <span className="terms-text039">Accounts</span>
          <br className="terms-text040"></br>
          <span>
            When you create an account on our Site, you agree to the following:
          </span>
          <br className="terms-text042"></br>
          <br className="terms-text043"></br>
          <span>
            1. You are solely responsible for your account and the security and
            privacy of your account, including passwords or sensitive
            information attached to that account; and
          </span>
          <br className="terms-text045"></br>
          <span>
            2. All personal information you provide to us through your account
            is up to date, accurate, and truthful and that you will update your
            personal information if it changes.
          </span>
          <br className="terms-text047"></br>
          <span>
            We reserve the right to suspend or terminate your account if you are
            using our Site illegally or if you violate these Terms and
            Conditions.
          </span>
          <br className="terms-text049"></br>
          <br className="terms-text050"></br>
          <span className="terms-text051">Sale of Services</span>
          <br className="terms-text052"></br>
          <span>
            These Terms and Conditions govern the sale of services available on
            our Site.
          </span>
          <br className="terms-text054"></br>
          <br className="terms-text055"></br>
          <span>
            We are under a legal duty to supply goods that match the description
            of the good(s) you order on our Site.
          </span>
          <br className="terms-text057"></br>
          <br className="terms-text058"></br>
          <span>The following services are available on our Site:</span>
          <br className="terms-text060"></br>
          <span>- Talent Matching;</span>
          <br className="terms-text062"></br>
          <span>- Recruitment;</span>
          <br className="terms-text064"></br>
          <span>
            - CV Analysis &amp; Job Specific Recommendations/ Builder;
          </span>
          <br className="terms-text066"></br>
          <span>- AI Matching Service; and</span>
          <br className="terms-text068"></br>
          <span>- Learning and Development.</span>
          <br className="terms-text070"></br>
          <br className="terms-text071"></br>
          <span>
            The services will be paid for in full when the services are ordered.
          </span>
          <br className="terms-text073"></br>
          <br className="terms-text074"></br>
          <span>
            These Terms and Conditions apply to all the services that are
            displayed on our Site at the time you access it. All information,
            descriptions, or images that we provide about our services are as
            accurate as possible. However, we are not legally bound by such
            information, descriptions, or images as we cannot guarantee the
            accuracy of all services we provide. You agree to purchase services
            from our Site at your own risk.
          </span>
          <br className="terms-text076"></br>
          <br></br>
          <span>
            We reserve the right to modify, reject or cancel your order whenever
            it becomes necessary. If we cancel your order and have already
            processed your payment, we will give you a refund equal to the
            amount you paid. You agree that it is your responsibility to monitor
            your payment instrument to verify receipt of any refund.
          </span>
          <br className="terms-text079"></br>
          <br className="terms-text080"></br>
          <span className="terms-text081">Third Party Goods and Services</span>
          <br className="terms-text082"></br>
          <span>
            Our Site may offer goods and services from third parties. We cannot
            guarantee the quality or accuracy of goods and services made
            available by third parties on our Site.
          </span>
          <br className="terms-text084"></br>
          <span>
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br className="terms-text086"></br>
          <span>
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="terms-text088">User Goods and Services</span>
          <br className="terms-text089"></br>
          <span>
            Our Site allows users to sell goods and services. We do not assume
            any responsibility for the goods and services users sell on our
            Site. We cannot guarantee the quality or accuracy of any goods and
            services sold by users on our Site. However, if we are made aware
            that a user is violating these Terms and Conditions, we reserve the
            right to suspend or prohibit the user from selling goods and
            services on our Site.
          </span>
          <br className="terms-text091"></br>
          <br className="terms-text092"></br>
          <span className="terms-text093">Subscriptions</span>
          <br className="terms-text094"></br>
          <span>
            Your subscription automatically renews and you will be automatically
            billed until we receive notification that you want to cancel the
            subscription.
          </span>
          <br className="terms-text096"></br>
          <br className="terms-text097"></br>
          <span>
            To cancel your subscription, please follow these steps: Email the
            provider before 10 working days to ensure timely cancellation. You
            may also cancel, in full, without reason within 14 days of your
            purchase in line with EU Consumer Regulations.
          </span>
          <br className="terms-text099"></br>
          <br className="terms-text100"></br>
          <span className="terms-text101">Free Trial</span>
          <br className="terms-text102"></br>
          <span>
            We offer the following free trial of our services: Customised B2B
            free trials which will be more extensive for beta users but will be
            at least a 24 hour free trial of all services premium and freemium.
          </span>
          <br className="terms-text104"></br>
          <br className="terms-text105"></br>
          <span>
            At the end of your free trial, the following will occur: You will
            automatically be billed our monthly subscription rate. If you do not
            want to be billed, you will need to cancel your subscription before
            your free trial ends.
          </span>
          <br className="terms-text107"></br>
          <br className="terms-text108"></br>
          <span>
            To cancel your free trial, please follow these steps: Email
            ben.kiely@shiftech.io or your personal sales rep.
          </span>
          <br className="terms-text110"></br>
          <br className="terms-text111"></br>
          <span className="terms-text112">Payments</span>
          <br className="terms-text113"></br>
          <span>We accept the following payment methods on our Site:</span>
          <br className="terms-text115"></br>
          <span>- Credit Card;</span>
          <br className="terms-text117"></br>
          <span>- Debit; and</span>
          <br className="terms-text119"></br>
          <span>
            - Stripe, Apple, Google Pay plus any third-party extensions provided
            and verified through WordPress that are integrated into the site. It
            will be clearly presented for the user..
          </span>
          <br className="terms-text121"></br>
          <span>
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br className="terms-text123"></br>
          <span>
            When you provide us with your payment information, you authorise our
            use of and access to the payment instrument you have chosen to use.
            By providing us with your payment information, you authorise us to
            charge the amount due to this payment instrument.
          </span>
          <br className="terms-text125"></br>
          <br className="terms-text126"></br>
          <span>
            If we believe your payment has violated any law or these Terms and
            Conditions, we reserve the right to cancel or reverse your
            transaction.
          </span>
          <br className="terms-text128"></br>
          <br className="terms-text129"></br>
          <span className="terms-text130">
            Right to Cancel and Receive Reimbursement
          </span>
          <br className="terms-text131"></br>
          <span>
            If you are a customer living in the United Kingdom or the Europoean
            Union you have the right to cancel your contract to purchase
            services from us within 14 days without giving notice. The
            cancellation period:
          </span>
          <br className="terms-text133"></br>
          <br className="terms-text134"></br>
          <span>
            - Will end 14 days from the date of purchase when you purchased a
            service.
          </span>
          <br className="terms-text136"></br>
          <br className="terms-text137"></br>
          <span>
            To exercise your right to cancel you must inform us of your decision
            to cancel within the cancellation period. To cancel, contact us by
            email at ben.kiely@shiftech.io or by post at __________. You may use
            a copy of the Cancellation Form, found at the end of these Terms and
            Conditions, but you are not required to do so.
          </span>
          <br className="terms-text139"></br>
          <br className="terms-text140"></br>
          <span>The right to cancel does not apply to:</span>
          <br className="terms-text142"></br>
          <br className="terms-text143"></br>
          <span>
            - Goods or services, other than the supply of water, gas,
            electricity, or district heating, where the price depends upon
            fluctuations in the financial market that we cannot control and that
            may occur during the cancellation period;
          </span>
          <br className="terms-text145"></br>
          <span>
            - Services that the customer has requested for the purpose of
            carrying out urgent repairs or maintenance;
          </span>
          <br className="terms-text147"></br>
          <span>
            - Newspapers, magazines, or periodicals, except for subscriptions to
            such publications;
          </span>
          <br className="terms-text149"></br>
          <span>- Passenger transport services; and</span>
          <br className="terms-text151"></br>
          <span>
            - Accommodation, transport of goods, vehicle rental services,
            catering, or services related to leisure activities, if the contract
            includes a specific date or period of performance.
          </span>
          <br className="terms-text153"></br>
          <br className="terms-text154"></br>
          <span className="terms-text155">Effects of Cancellation</span>
          <br className="terms-text156"></br>
          <span>
            If you requested the performance of services begin during the
            cancellation period, you are required 
          </span>
          <span>
            to pay us an amount which is in proportion to what has been
            performed until you have communicated to us your decision to cancel
            this contract. We will reimburse to you any amount you have paid
            above this proportionate payment.
          </span>
          <br className="terms-text159"></br>
          <br className="terms-text160"></br>
          <span>
            We will make the reimbursement using the same form of payment as you
            used for the initial purchase unless you have expressly agreed
            otherwise. You will not incur any fees because of the reimbursement.
          </span>
          <br className="terms-text162"></br>
          <br className="terms-text163"></br>
          <span>
            This right to cancel and to reimbursement is not affected by any
            return or refund policy we may have.
          </span>
          <br className="terms-text165"></br>
          <br className="terms-text166"></br>
          <span className="terms-text167">Consumer Protection Law</span>
          <br className="terms-text168"></br>
          <span>
            Where the Sale of Goods and Supply of Services Act 1980, or any
            other consumer protection legislation in your jurisdiction applies
            and cannot be excluded, these Terms and Conditions will not limit
            your legal rights and remedies under that legislation. These Terms
            and Conditions will be read subject to the mandatory provisions of
            that legislation. If there is a conflict between these Terms and
            Conditions and that legislation, the mandatory provisions of the
            legislation will apply.
          </span>
          <br className="terms-text170"></br>
          <br className="terms-text171"></br>
          <span className="terms-text172">Links to Other Websites</span>
          <br className="terms-text173"></br>
          <span>
            Our Site contains links to third party websites or services that we
            do not own or control. We are not responsible for the content,
            policies, or practices of any third party website or service linked
            to on our Site. It is your responsibility to read the terms and
            conditions and privacy policies of these third party websites before
            using these sites.
          </span>
          <br className="terms-text175"></br>
          <br className="terms-text176"></br>
          <span className="terms-text177">Limitation of Liability</span>
          <br className="terms-text178"></br>
          <span>
            Shift Technologies and our directors, officers, agents, employees,
            subsidiaries, and affiliates will not be liable for any actions,
            claims, losses, damages, liabilities and expenses including legal
            fees from your use of the Site.
          </span>
          <br className="terms-text180"></br>
          <br className="terms-text181"></br>
          <span className="terms-text182">Indemnity</span>
          <br className="terms-text183"></br>
          <span>
            Except where prohibited by law, by using this Site you indemnify and
            hold harmless Shift Technologies and our directors, officers,
            agents, employees, subsidiaries, and affiliates from any actions,
            claims, losses, damages, liabilities and expenses including legal
            fees arising out of your use of our Site or your violation of these
            Terms and Conditions.
          </span>
          <br className="terms-text185"></br>
          <br className="terms-text186"></br>
          <span className="terms-text187">Applicable Law</span>
          <br className="terms-text188"></br>
          <span>
            These Terms and Conditions are governed by the laws of Ireland.
          </span>
          <br className="terms-text190"></br>
          <span>
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br className="terms-text192"></br>
          <span>
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="terms-text194">Dispute Resolution</span>
          <br className="terms-text195"></br>
          <span>
            Subject to any exceptions specified in these Terms and Conditions,
            if you and Shift Technologies are unable to resolve any dispute
            through informal discussion, then you and Shift Technologies agree
            to submit the issue first before a non-binding mediator and to an
            arbitrator in the event that mediation fails. The decision of the
            arbitrator will be final and binding. Any mediator or arbitrator
            must be a neutral party acceptable to both you and Shift
            Technologies. The costs of any mediation or arbitration will be paid
            by the unsuccessful party.
          </span>
          <br className="terms-text197"></br>
          <span>
            Notwithstanding any other provision in these Terms and Conditions,
            you and Shift Technologies agree that you both retain the right to
            bring an action in small claims court and to bring an action for
            injunctive relief or intellectual property infringement.
          </span>
          <br className="terms-text199"></br>
          <br className="terms-text200"></br>
          <span className="terms-text201">Severability</span>
          <br className="terms-text202"></br>
          <span>
            If at any time any of the provisions set forth in these Terms and
            Conditions are found to be inconsistent or invalid under applicable
            laws, those provisions will be deemed void and will be removed from
            these Terms and Conditions. All other provisions will not be
            affected by the removal and the rest of these Terms and Conditions
            will still be considered valid.
          </span>
          <br className="terms-text204"></br>
          <br className="terms-text205"></br>
          <span className="terms-text206">Changes</span>
          <br className="terms-text207"></br>
          <span>
            These Terms and Conditions may be amended from time to time in order
            to maintain compliance with the law and to reflect any changes to
            the way we operate our Site and the way we expect users to behave on
            our Site. We will notify users by email of changes to these Terms
            and Conditions or post a notice on our Site.
          </span>
          <br className="terms-text209"></br>
          <br className="terms-text210"></br>
          <span className="terms-text211">Contact Details</span>
          <br className="terms-text212"></br>
          <span>
            Please contact us if you have any questions or concerns. Our contact
            details are as follows:
          </span>
          <br className="terms-text214"></br>
          <span>______________________________________</span>
          <br></br>
          <span> ben.kiely@shiftech.io</span>
          <br className="terms-text218"></br>
          <span>Ireland, Europe (Remote)</span>
          <br className="terms-text220"></br>
          <br className="terms-text221"></br>
          <span>
            You can also contact us through the feedback form available on our
            Site.
          </span>
          <br className="terms-text223"></br>
          <span>Effective Date: 18th day of September, 2023</span>
          <br className="terms-text225"></br>
          <span>
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br className="terms-text227"></br>
          <span className="terms-text228"> Cancellation Form</span>
          <br className="terms-text229"></br>
          <span>
            If you want to cancel your contract of sale with us you may use this
            form and email or post it back to us at the address below.
          </span>
          <br className="terms-text231"></br>
          <br className="terms-text232"></br>
          <span>To: https://shiftech.io</span>
          <br className="terms-text234"></br>
          <span>Address: Ireland, Europe (Remote)</span>
          <br></br>
          <span> Email: ben.kiely@shiftech.io</span>
          <br className="terms-text238"></br>
          <br className="terms-text239"></br>
          <span>
            I hereby give notice that I cancel my contract of sale of the
            following goods or services:
            ________________________________________________________________________________
            ________________________________________________________________________________
            ________________________________________________________________________________
            ________________________________________________________________________________
          </span>
          <br className="terms-text241"></br>
          <span>Ordered on: ______________________________________</span>
          <br className="terms-text243"></br>
          <span>Received on: ______________________________________</span>
          <br className="terms-text245"></br>
          <span>Customer name: ______________________________________</span>
          <br className="terms-text247"></br>
          <span>
            Customer address:
            ____________________________________________________________________________
          </span>
          <br className="terms-text249"></br>
          <span>
            Signature (only required if you are returning a hardcopy of this
            form): ______________________________________
          </span>
          <br className="terms-text251"></br>
          <span>Date: ______________________________________</span>
        </span>
      </div>
      <div className="terms-container3">
        <footer className="terms-footer">
          <div className="terms-container4">
            <div className="terms-container5">
              <span className="terms-text253">Shift</span>
              <span>Copyright © 2023 Soft by Shift Technologies.</span>
            </div>
            <Link to="/privacy-policy" className="terms-navlink1">
              Privacy Policy
            </Link>
            <Link to="/terms" className="terms-navlink2">
              Terms and Conditions
            </Link>
          </div>
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1582447780387-b2f4d393ad81?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEwMnx8d2hpdGUlMjBhYnN0cmFjdHxlbnwwfHx8fDE2OTQ5ODkyMzh8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
            className="terms-image2"
          />
        </footer>
      </div>
    </div>
  )
}

export default Terms
