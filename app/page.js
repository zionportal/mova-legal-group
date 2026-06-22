'use client';

import { useState } from 'react';
const Icon = ({children, className=''}) => <span aria-hidden="true" className={`icon ${className}`}>{children}</span>;
const ArrowRight = () => <Icon>→</Icon>;
const Phone = () => <Icon>☎</Icon>;
const ChevronDown = ({className=''}) => <Icon className={className}>⌄</Icon>;

const phone = '(858) 205-2448';
const practices = [
  { icon: '◇', title: 'Vehicle Accidents', text: 'Car, motorcycle, truck, rideshare, bicycle, pedestrian, bus, scooter, taxi, and uninsured motorist claims.' },
  { icon: '▱', title: 'Personal Injury', text: 'Legal help after pedestrian injuries, boat accidents, whiplash, property damage, train accidents, and other injury matters.' },
  { icon: '✦', title: 'Catastrophic Injuries', text: 'Representation for serious injuries including brain injuries, spinal cord injuries, burns, amputations, and wrongful death.' },
  { icon: '⌂', title: 'Premises Accidents', text: 'Claims involving slip and falls, dog bites, grocery store injuries, elevator accidents, playground injuries, and unsafe property conditions.' },
  { icon: '+', title: 'Sex Crimes & Abuse', text: 'Support for survivors in matters involving sexual assault, sexual harassment, and rideshare-related assault claims.' },
  { icon: '*', title: 'Abuse & Negligence', text: 'Advocacy in child injury, elder abuse, and other negligence matters where vulnerable people have been harmed.' },
];
const serviceAreas = ['San Diego', 'El Cajon', 'Oceanside', 'Temecula', 'Chula Vista', 'Los Angeles', 'San Francisco', 'Sacramento', 'Roseville', 'Citrus Heights', 'El Centro', 'Victorville'];
const reviews = [
  ['Eduardo Medina', 'I had a great experience with Mova Law Group. After my accident, I was overwhelmed and unsure of what to do next. From the very start Chris and his team were compassionate, responsive, and incredibly knowledgeable.'],
  ['Google review', 'Chris Mova at Mova Law Group genuinely cared about my well-being throughout the entire claim process. They kept me informed every step of the way, ensuring I always knew what was happening.'],
  ['Google review', 'Got into a nasty accident last year and reached out to Mova Law for assistance on my medical bills and injuries. Chris Mova and his team were professional, diligent, and empathetic, and they handled the insurance claim in a timely manner.'],
];
const faqs = [
  ['How much does it cost to hire Mova Law Group?', 'Your initial consultation is free, and personal injury matters are generally handled on a contingency fee basis. That means you do not pay attorney fees upfront to begin the case. Attorney fees are collected only if compensation is recovered for you. This structure allows injured people to get legal guidance without adding another bill during a difficult time. During the consultation, the firm can explain how fees and case costs work before you decide whether to move forward.'],
  ['What types of personal injury cases do you handle?', 'Mova Law Group represents injured people in vehicle accidents, personal injury matters, catastrophic injuries, premises accidents, sexual assault and abuse matters, child injury, elder abuse, and wrongful death cases. The firm also evaluates cases involving serious injuries where medical treatment, lost income, and long-term recovery needs may be part of the claim. Each case starts with a review of what happened, who may be responsible, and what evidence is available. If the matter is outside the firm\'s focus, the consultation can still help you understand the right next step. The goal is to make the path forward clear before you make a decision.'],
  ['How long do I have to file a claim in California?', 'In many California personal injury cases, the general deadline to file a lawsuit is two years from the date of injury. Some claims have shorter deadlines, especially if a government entity may be involved. There may also be issues that affect when the clock starts, such as delayed discovery of an injury. Missing a deadline can seriously limit or eliminate your ability to pursue compensation. Because the exact deadline depends on the facts, it is important to speak with an attorney as soon as possible.'],
  ['What should I do after an accident?', 'Your first priority should be getting medical attention, even if you think the injury may be minor. You should preserve photos, videos, witness information, police reports, medical records, repair estimates, and any correspondence from insurance companies. Avoid giving detailed recorded statements or accepting an early settlement before you understand the full extent of your injuries and losses. Insurance companies may move quickly, but your recovery and documentation need to be handled carefully. Speaking with an attorney early can help protect evidence and prevent avoidable mistakes.'],
  ['What can compensation include in a personal injury case?', 'Compensation may include medical expenses, future treatment needs, lost wages, reduced earning ability, property damage, and pain and suffering. The value of a claim depends on the severity of the injury, the clarity of liability, available insurance coverage, and how the injury affects daily life. A strong claim usually requires organized medical documentation and evidence connecting the accident to the harm suffered. Early settlement offers may not reflect future treatment or long-term limitations. A careful case review helps identify what losses should be included before negotiations begin.'],
  ['Should I talk to the insurance company before calling a lawyer?', 'You can report that an accident happened, but you should be careful about detailed statements, recorded interviews, or signing documents before getting advice. Insurance adjusters may sound helpful, but their role is to evaluate the claim for the insurance company. Statements made early can be incomplete because injuries, treatment plans, and lost income may not be fully known yet. An attorney can help you understand what information is appropriate to provide and what should wait until the claim is better documented. This helps reduce the risk of saying something that is later used out of context.'],
  ['How long does a personal injury case take?', 'The timeline depends on the facts of the case, the seriousness of the injuries, the length of medical treatment, and whether liability is disputed. Some cases can resolve through settlement negotiations after treatment and documentation are complete. More complex cases may take longer, especially if litigation becomes necessary. It is usually unwise to rush a settlement before the medical picture is clear because future costs may be missed. A good process balances steady progress with careful preparation.'],
  ['What if I was partly at fault for the accident?', 'California follows a comparative negligence system, which means you may still be able to recover compensation even if you share some responsibility. Your compensation can be reduced by the percentage of fault assigned to you. Insurance companies may try to shift more blame than the facts support, so evidence matters. Photos, witness statements, traffic reports, medical records, and expert analysis can all help clarify what happened. An attorney can evaluate whether the fault assessment is fair and how it may affect the claim.'],
  ['Do I need to go to court for a personal injury claim?', 'Many personal injury claims resolve through settlement without a trial. However, preparing a case carefully from the beginning can improve the chances of a fair resolution. If the insurance company disputes fault, undervalues the injury, or refuses to negotiate reasonably, litigation may become necessary. Going to court is not always the goal, but being ready for that possibility can strengthen the position of the injured person. The firm can explain the options as the case develops so you know what to expect.'],
  ['What happens during a free consultation?', 'A free consultation is a focused conversation about what happened, what injuries were reported, what treatment has occurred, and what insurance or evidence may be involved. You can ask questions about deadlines, fees, communication, and the likely next steps. The attorney or intake team may ask for documents such as photos, police reports, insurance letters, or medical information. You are not required to know every detail before calling, because part of the consultation is helping organize the situation. By the end, you should have a clearer sense of whether the firm can help and what comes next.'],
];

function Logo() { return <a className="logo" href="#top" aria-label="Mova Law Group home"><span>MOVA</span><small>LAW GROUP</small></a>; }

export default function Home() {
  const [menu, setMenu] = useState(false);
  const [open, setOpen] = useState(0);
  const [sent, setSent] = useState(false);
  return <main id="top">
    <header className="header">
      <Logo />
      <button className="menu" onClick={() => setMenu(!menu)} aria-label="Toggle menu">{menu ? '×' : '☰'}</button>
      <nav className={menu ? 'nav open' : 'nav'}>
        <a href="#practice">Practice Areas</a><a href="#about">About</a><a href="#reviews">Reviews</a><a href="#faq">FAQ</a><a href="#contact">Contact</a>
      </nav>
      <a className="headerPhone" href="tel:+18582052448"><small>FREE CONSULTATION</small>{phone}</a>
    </header>

    <section className="hero">
      <div className="heroCopy">
        <p className="kicker">SAN DIEGO PERSONAL INJURY LAWYERS</p>
        <h1>Calm. Confident.<br/><em>Committed to You.</em></h1>
        <p className="lead">When an injury changes everything, you deserve a legal team that listens, communicates clearly, and fights for the recovery you need.</p>
        <div className="actions"><a className="button gold" href="#contact">Get a Free Case Review <ArrowRight size={18}/></a><a className="call" href="tel:+18582052448"><Phone size={18}/>{phone}</a></div>
        <p className="promise">No fee unless we win. Available 24/7.</p>
      </div>
      <div className="heroVisual"><div className="sun"/><img src="/chris-movafagh.png" alt="Personal injury attorney Chris Movafagh"/><div className="nameplate"><strong>Chris Movafagh</strong><span>Founding Attorney</span></div></div>
    </section>

    <section className="trust"><span>JUSTICE.</span><span>ACCOUNTABILITY.</span><span>RESULTS.</span></section>

    <section className="practice section" id="practice">
      <div className="sectionHead"><p className="kicker">HOW WE CAN HELP</p><h2>Legal Services for Injury Victims.<br/>Focused on Your Future.</h2><p>We handle vehicle accident, personal injury, catastrophic injury, premises accident, abuse, and negligence matters so you can focus on healing.</p></div>
      <div className="practiceGrid">{practices.map(({icon,title,text},i)=><article key={title}><span>0{i+1}</span><Icon>{icon}</Icon><h3>{title}</h3><p>{text}</p><a href="#contact">Discuss your case <ArrowRight/></a></article>)}</div>
      <p>Clients served include injured people and families in {serviceAreas.join(', ')} and nearby California communities.</p>
    </section>

    <section className="about" id="about"><div className="aboutImage"><img src="/chris-movafagh.png" alt="Chris Movafagh"/></div><div className="aboutCopy"><p className="kicker">A DIFFERENT KIND OF LAW FIRM</p><h2>Personal Attention.<br/><em>Purposeful Advocacy.</em></h2><p>Injured people are often treated like a claim number. At Mova Law Group, your story comes first. We pair careful preparation with direct communication so you always understand what is happening and why.</p><blockquote>“You should never have to wonder whether your lawyer is fighting for you.”</blockquote><a className="textLink textLinkDesktop" href="#contact">Request a Free Case Review <ArrowRight/></a><a className="textLink textLinkMobile" href="tel:+18582052448"><Phone/> Call (858) 205-2448</a></div></section>

    <section className="reviews section" id="reviews"><div className="sectionHead"><p className="kicker">CLIENT EXPERIENCE</p><h2>Care You Can Feel.<br/>Advocacy You Can Trust.</h2></div><div className="reviewGrid">{reviews.map(([name,text],i)=><blockquote key={`${name}-${i}`}>“{text}”<cite>— {name}</cite></blockquote>)}</div><div className="sectionCtas"><a className="button navyButton" href="#contact">Request a Free Case Review <ArrowRight/></a><a className="button callButton" href="tel:+18582052448"><Phone/> Call (858) 205-2448</a></div><p className="disclaimer">Client statements are sourced from Mova Law Group review content. Results and experiences vary.</p></section>

    <section className="whyChoose section" aria-labelledby="why-choose-title">
      <div className="whyCopy"><p className="kicker">WHY CHOOSE MOVA LAW GROUP</p><h2 id="why-choose-title">Built Around You.<br/><em>Prepared for What’s Next.</em></h2><p className="whyIntro">The right legal team should make a difficult process clearer, not more complicated. Our approach keeps you informed, supported, and ready for every step.</p><div className="whyPoints"><article><span>01</span><div><h3>Personal Attention</h3><p>Your story, concerns, and goals shape the strategy from the first conversation forward.</p></div></article><article><span>02</span><div><h3>Clear Communication</h3><p>Straight answers and timely updates help you understand what is happening and why.</p></div></article><article><span>03</span><div><h3>Focused Preparation</h3><p>Every detail receives careful attention so your claim is presented clearly and purposefully.</p></div></article></div></div>
      <div className="whyVisual"><img src="/why-choose-legal-team.png" alt="Legal team carefully reviewing a case together"/><div className="whyNote"><strong>Your case deserves</strong><span>careful attention from day one.</span></div></div>
    </section>

    <section className="expect section" aria-labelledby="expect-title">
      <div className="expectVisual"><img className="expectMain" src="/expect-client-consultation.jpg" alt="Professional handshake after a legal consultation"/><img className="expectTeam" src="/expect-legal-documents.jpg" alt="Scales of justice representing careful legal preparation"/><div className="expectPortrait"><img src="/expect-case-review.jpg" alt="Legal documents being reviewed during case preparation"/></div></div>
      <div className="expectCopy"><p className="kicker">WHAT YOU CAN EXPECT</p><h2 id="expect-title">Guidance That Keeps<br/>You Moving Forward.</h2><p className="expectIntro">A personal injury claim can feel unfamiliar. Our role is to bring structure to the process, answer the questions that matter, and prepare your case with care.</p><div className="expectSteps"><article><span>01</span><div><h3>A Clear Starting Plan</h3><p>We listen first, identify the immediate priorities, and explain the practical next steps for your situation.</p></div></article><article><span>02</span><div><h3>Consistent Communication</h3><p>You receive direct updates in plain language, without being left to guess where your matter stands.</p></div></article><article><span>03</span><div><h3>Deliberate Preparation</h3><p>We organize the evidence and present your claim purposefully while you focus on recovery.</p></div></article></div><a className="button navyButton" href="#contact">Start With a Conversation <ArrowRight/></a></div>
    </section>

    <section className="faq section" id="faq"><div><p className="kicker">ANSWERS WHEN YOU NEED THEM</p><h2>Frequently Asked<br/>Questions</h2><p>Every case is different. These answers are general information, not legal advice.</p><div className="sectionCtas alignLeft"><a className="button navyButton" href="#contact">Request a Free Case Review <ArrowRight/></a><a className="button callButton" href="tel:+18582052448"><Phone/> Call (858) 205-2448</a></div></div><div>{faqs.map(([q,a],i)=><article className="faqItem" key={q}><button onClick={()=>setOpen(open===i?-1:i)} aria-expanded={open===i}>{q}<ChevronDown className={open===i?'rot':''}/></button>{open===i&&<p>{a}</p>}</article>)}</div></section>

    <section className="contact" id="contact"><div><p className="kicker">YOUR NEXT STEP STARTS HERE</p><h2>Tell Us What Happened.</h2><p>A conversation costs nothing. Call now or send a private message and our team will follow up.</p><a className="bigPhone" href="tel:+18582052448"><Phone/>{phone}</a><small>Calling or submitting this form does not create an attorney-client relationship.</small></div><form onSubmit={(e)=>{e.preventDefault();setSent(true)}}>{sent ? <div className="success"><h3>Thank you.</h3><p>Your request is ready to be connected to the firm’s intake system.</p></div> : <><label>Name<input required name="name" autoComplete="name"/></label><label>Phone<input required name="phone" type="tel" autoComplete="tel"/></label><label>Email<input name="email" type="email" autoComplete="email"/></label><label>How can we help?<textarea required name="message" rows="4"/></label><button className="button gold" type="submit">Request My Free Review <ArrowRight size={18}/></button></>}</form></section>

    <footer><div><Logo/><p>San Diego personal injury lawyers committed to clear guidance and strong advocacy.</p></div><div><strong>Explore</strong><a href="#practice">Practice Areas</a><a href="#about">About</a><a href="#reviews">Reviews</a></div><div><strong>Contact</strong><a href="tel:+18582052448">{phone}</a><span>San Diego, California</span><span>Available 24/7</span></div><p className="legal">© {new Date().getFullYear()} Mova Law Group, APC. Attorney Advertising. Prior results do not guarantee a similar outcome.</p></footer>
  </main>;
}
