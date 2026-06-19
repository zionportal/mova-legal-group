'use client';

import { useState } from 'react';
const Icon = ({children, className=''}) => <span aria-hidden="true" className={`icon ${className}`}>{children}</span>;
const ArrowRight = () => <Icon>→</Icon>;
const Phone = () => <Icon>☎</Icon>;
const ChevronDown = ({className=''}) => <Icon className={className}>⌄</Icon>;

const phone = '(858) 205-2448';
const practices = [
  { icon: '◇', title: 'Car Accidents', text: 'Clear guidance and determined advocacy after a serious crash.' },
  { icon: '▱', title: 'Truck Accidents', text: 'Holding commercial carriers and their insurers accountable.' },
  { icon: '✦', title: 'Wrongful Death', text: 'Compassionate counsel for families facing an unimaginable loss.' },
  { icon: '⌂', title: 'Premises Liability', text: 'Help when unsafe property conditions cause preventable harm.' },
];
const faqs = [
  ['How much does it cost to hire Mova Law Group?', 'Your initial consultation is free. Personal injury matters are generally handled on a contingency fee basis, so attorney fees are collected only if compensation is recovered.'],
  ['What types of cases do you handle?', 'The firm represents clients in car, truck, motorcycle, pedestrian, premises liability, and wrongful death matters.'],
  ['How long do I have to file a claim in California?', 'Deadlines vary by claim and defendant, and some are much shorter than others. Speak with an attorney promptly so the applicable deadline can be evaluated.'],
  ['What should I do after an accident?', 'Get medical care, preserve photos and records, avoid detailed statements to insurers, and contact an attorney before evidence disappears.'],
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
      <div className="sectionHead"><p className="kicker">HOW WE CAN HELP</p><h2>Focused on Personal Injury.<br/>Focused on Your Future.</h2><p>We handle the legal pressure so you can focus on healing.</p></div>
      <div className="practiceGrid">{practices.map(({icon,title,text},i)=><article key={title}><span>0{i+1}</span><Icon>{icon}</Icon><h3>{title}</h3><p>{text}</p><a href="#contact">Discuss your case <ArrowRight/></a></article>)}</div>
    </section>

    <section className="about" id="about"><div className="aboutImage"><img src="/chris-movafagh.png" alt="Chris Movafagh"/></div><div className="aboutCopy"><p className="kicker">A DIFFERENT KIND OF LAW FIRM</p><h2>Personal Attention.<br/><em>Purposeful Advocacy.</em></h2><p>Injured people are often treated like a claim number. At Mova Law Group, your story comes first. We pair careful preparation with direct communication so you always understand what is happening and why.</p><blockquote>“You should never have to wonder whether your lawyer is fighting for you.”</blockquote><a className="textLink textLinkDesktop" href="#contact">Request a Free Case Review <ArrowRight/></a><a className="textLink textLinkMobile" href="tel:+18582052448"><Phone/> Call (858) 205-2448</a></div></section>

    <section className="reviews section" id="reviews"><div className="sectionHead"><p className="kicker">CLIENT EXPERIENCE</p><h2>Care You Can Feel.<br/>Advocacy You Can Trust.</h2></div><div className="reviewGrid"><blockquote>“They explained the process clearly and made a difficult time feel manageable.”<cite>— Former client</cite></blockquote><blockquote>“Professional, responsive, and genuinely focused on helping me move forward.”<cite>— Former client</cite></blockquote><blockquote>“I always felt heard, informed, and supported.”<cite>— Former client</cite></blockquote></div><p className="disclaimer">Client statements are illustrative. Results and experiences vary.</p></section>

    <section className="whyChoose section" aria-labelledby="why-choose-title">
      <div className="whyCopy"><p className="kicker">WHY CHOOSE MOVA LAW GROUP</p><h2 id="why-choose-title">Built Around You.<br/><em>Prepared for What’s Next.</em></h2><p className="whyIntro">The right legal team should make a difficult process clearer, not more complicated. Our approach keeps you informed, supported, and ready for every step.</p><div className="whyPoints"><article><span>01</span><div><h3>Personal Attention</h3><p>Your story, concerns, and goals shape the strategy from the first conversation forward.</p></div></article><article><span>02</span><div><h3>Clear Communication</h3><p>Straight answers and timely updates help you understand what is happening and why.</p></div></article><article><span>03</span><div><h3>Focused Preparation</h3><p>Every detail receives careful attention so your claim is presented clearly and purposefully.</p></div></article></div></div>
      <div className="whyVisual"><img src="/why-choose-legal-team.png" alt="Legal team carefully reviewing a case together"/><div className="whyNote"><strong>Your case deserves</strong><span>careful attention from day one.</span></div></div>
    </section>

    <section className="expect section" aria-labelledby="expect-title">
      <div className="expectVisual"><img className="expectMain" src="/personal-attention-consultation.png" alt="Attorney listening during a client consultation"/><img className="expectTeam" src="/why-choose-legal-team.png" alt="Legal team reviewing a case"/><div className="expectPortrait"><img src="/chris-movafagh.png" alt="Attorney Chris Movafagh"/></div></div>
      <div className="expectCopy"><p className="kicker">WHAT YOU CAN EXPECT</p><h2 id="expect-title">Guidance That Keeps<br/>You Moving Forward.</h2><p className="expectIntro">A personal injury claim can feel unfamiliar. Our role is to bring structure to the process, answer the questions that matter, and prepare your case with care.</p><div className="expectSteps"><article><span>01</span><div><h3>A Clear Starting Plan</h3><p>We listen first, identify the immediate priorities, and explain the practical next steps for your situation.</p></div></article><article><span>02</span><div><h3>Consistent Communication</h3><p>You receive direct updates in plain language, without being left to guess where your matter stands.</p></div></article><article><span>03</span><div><h3>Deliberate Preparation</h3><p>We organize the evidence and present your claim purposefully while you focus on recovery.</p></div></article></div><a className="button navyButton" href="#contact">Start With a Conversation <ArrowRight/></a></div>
    </section>

    <section className="faq section" id="faq"><div><p className="kicker">ANSWERS WHEN YOU NEED THEM</p><h2>Frequently Asked<br/>Questions</h2><p>Every case is different. These answers are general information, not legal advice.</p></div><div>{faqs.map(([q,a],i)=><article className="faqItem" key={q}><button onClick={()=>setOpen(open===i?-1:i)} aria-expanded={open===i}>{q}<ChevronDown className={open===i?'rot':''}/></button>{open===i&&<p>{a}</p>}</article>)}</div></section>

    <section className="contact" id="contact"><div><p className="kicker">YOUR NEXT STEP STARTS HERE</p><h2>Tell Us What Happened.</h2><p>A conversation costs nothing. Call now or send a private message and our team will follow up.</p><a className="bigPhone" href="tel:+18582052448"><Phone/>{phone}</a><small>Calling or submitting this form does not create an attorney-client relationship.</small></div><form onSubmit={(e)=>{e.preventDefault();setSent(true)}}>{sent ? <div className="success"><h3>Thank you.</h3><p>Your request is ready to be connected to the firm’s intake system.</p></div> : <><label>Name<input required name="name" autoComplete="name"/></label><label>Phone<input required name="phone" type="tel" autoComplete="tel"/></label><label>Email<input name="email" type="email" autoComplete="email"/></label><label>How can we help?<textarea required name="message" rows="4"/></label><button className="button gold" type="submit">Request My Free Review <ArrowRight size={18}/></button></>}</form></section>

    <footer><div><Logo/><p>San Diego personal injury lawyers committed to clear guidance and strong advocacy.</p></div><div><strong>Explore</strong><a href="#practice">Practice Areas</a><a href="#about">About</a><a href="#reviews">Reviews</a></div><div><strong>Contact</strong><a href="tel:+18582052448">{phone}</a><span>San Diego, California</span><span>Available 24/7</span></div><p className="legal">© {new Date().getFullYear()} Mova Law Group, APC. Attorney Advertising. Prior results do not guarantee a similar outcome.</p></footer>
  </main>;
}
