'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Linkedin,
  Github,
  MapPin,
  GraduationCap,
  Download,
} from 'lucide-react';

const NAV = [
  { id: 'about', label: 'About' },
  { id: 'cv', label: 'CV' },
  { id: 'research', label: 'Research' },
  { id: 'teaching', label: 'Teaching' },
  { id: 'externalities', label: 'Externalities' },
  { id: 'contact', label: 'Contact' },
];
const PAPERS = [
  {
    title: "Disagreement Resolution Horizon and Open Market Repurchase Program Completion",
    href: "/uploads/disagreement-horizon.pdf",
    abstract: "Paste the abstract here (or use a short placeholder for now)."
  },
  {
    title: "Open Market Repurchase Programs and Systematic Liquidity",
    href: "/uploads/omr-systematic-liquidity.pdf",
    abstract: "Paste the abstract here."
  },
  {
    title: "Mispricing, Mutual Fund Flows, and Corporate Buybacks",
    href: "/uploads/mispricing-flows-buybacks.pdf",
    abstract: "Paste the abstract here."
  }
];

export default function Page() {
  return (
    <div>
      <TopNav />
      <div className="container">
        <aside className="sidebar">
          <ProfileCard />
        </aside>
        <main className="content">
          <Section id="about" title="About">
            <p className="p-lg">
              I’m <b>Ali Choubdaran</b>, a PhD in Finance from the London School
              of Economics. My research sits at the intersection of corporate
              finance, market microstructure, and applied ML/NLP. I build
              datasets, causal designs, and strategies around share repurchases
              and fundamental news.
            </p>
            <p className="p-lg">
              I’m currently applying for roles in quantitative research, data
              science, and economist/ML roles. Previously, I taught finance
              courses at LSE and worked on applied NLP for macro/markets.
            </p>
            <div className="two-col">
              <div>
                <h3 className="subheading">Interests</h3>
                <ul className="list">
                  <li>Corporate Finance & Repurchases</li>
                  <li>Market Microstructure</li>
                  <li>Econometrics & Causal Inference</li>
                  <li>NLP / LLMs for Markets</li>
                </ul>
              </div>
              <div>
                <h3 className="subheading">Education</h3>
                <ul className="edu">
                  <li>
                    <i className="dot" />
                    <div>
                      <div className="edu-title">PhD in Finance, 2021–2025</div>
                      <div className="edu-inst">
                        London School of Economics (LSE)
                      </div>
                    </div>
                  </li>
                  <li>
                    <i className="dot" />
                    <div>
                      <div className="edu-title">
                        MRes in Finance, 2019–2021
                      </div>
                      <div className="edu-inst">
                        London School of Economics (LSE)
                      </div>
                    </div>
                  </li>
                  <li>
                    <i className="dot" />
                    <div>
                      <div className="edu-title">
                        MSc in Economics, 2016–2019
                      </div>
                      <div className="edu-inst">
                        Sharif University of Technology
                      </div>
                    </div>
                  </li>
                  <li>
                    <i className="dot" />
                    <div>
                      <div className="edu-title">
                        BSc in Electrical Engineering, 2011–2016
                      </div>
                      <div className="edu-inst">
                        Sharif University of Technology
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </Section>

          <Section id="cv" title="CV">
            <p className="p-md">
              You can download my CV{' '}
              <a className="link" href="/uploads/cv.pdf">
                here
              </a>
              .
            </p>
          </Section>

          <Section id="research" title="Research">
            <h3 className="h3">Job Market Paper</h3>
            <p className="p-lg">
              <a className="link" href="#" onClick={(e) => e.preventDefault()}>
                Disagreement Horizon and Timing Alpha in Share Repurchase
                Programs
              </a>
            </p>
            <p className="p-md">
              I construct a large dataset of buyback completion and show that
              completion dynamics reveal managers’ private information horizon.
              A completion-contingent strategy outperforms buy-and-hold.
            </p>

            <h3 className="h3">Other Working Papers</h3>
            <ul className="list">
              <li>
                Flow-Induced Mispricing and Share Repurchases: Evidence from a
                Natural Experiment
              </li>
              <li>
                Corporate Trading and Systematic Liquidity Risk: Evidence from
                Share Repurchases
              </li>
            </ul>
          </Section>

          <Section id="teaching" title="Teaching">
            <p className="p-md">
              I’ve taught derivatives and finance courses at LSE Summer School
              and served as a GTA across multiple years, with teaching
              evaluations well above department averages.
            </p>
            <ul className="list">
              <li>Options, Futures & Other Derivatives (FM360)</li>
              <li>Corporate Finance / Econometrics (various years)</li>
            </ul>
          </Section>

          <Section id="externalities" title="Externalities">
            <p className="p-md">Selected open resources and side work:</p>
            <ul className="list">
              <li>
                <a
                  className="link"
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  NLP-based FOMC sentiment toolkit (repo)
                </a>
              </li>
              <li>
                <a
                  className="link"
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Vision-crawling seat map prototype
                </a>
              </li>
            </ul>
          </Section>

          <Section id="contact" title="Contact">
            <ul className="contact">
              <li>
                <Mail size={18} />
                &nbsp;
                <a
                  className="link"
                  href="mailto:a.choubdaran-varnosfaderani@lse.ac.uk"
                >
                  a.choubdaran-varnosfaderani@lse.ac.uk
                </a>
              </li>
              <li>
                <MapPin size={18} />
                &nbsp; London, UK
              </li>
              <li>
                <Linkedin size={18} />
                &nbsp;
                <a
                  className="link"
                  href="https://www.linkedin.com/in/ali-choubdaran-varnosfaderani/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <Github size={18} />
                &nbsp;
                <a
                  className="link"
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </Section>

          <footer className="footer">
            © {new Date().getFullYear()} Ali Choubdaran — Published with Next.js
          </footer>
        </main>
      </div>
    </div>
  );
}

function TopNav() {
  return (
    <header className="topnav">
      <div className="nav-inner">
        <a className="brand" href="/">
          Ali Choubdaran
        </a>
        <nav className="nav">
          {NAV.map((n) => (
            <a key={n.id} className="nav-link" href={`/#${n.id}`}>
              {n.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

function ProfileCard() {
  return (
    <div className="profile">
      <img
        className="avatar"
        src="/avatar.jpg"
        width={270}
        height={270}
        alt="Ali Choubdaran"
      />
      <div className="portrait-title">
        <h2>Ali Choubdaran</h2>
        <h3>PhD in Finance</h3>
        <h3 className="inst">
          <a
            className="link"
            href="https://www.lse.ac.uk/"
            target="_blank"
            rel="noreferrer"
          >
            London School of Economics
          </a>
        </h3>
      </div>
      <ul className="icon-list" aria-hidden="true">
        <li>
          <a
            className="icon"
            href="mailto:a.choubdaran-varnosfaderani@lse.ac.uk"
            aria-label="email"
          >
            <Mail />
          </a>
        </li>
        <li>
          <a
            className="icon"
            href="https://www.linkedin.com/in/ali-choubdaran-varnosfaderani/"
            target="_blank"
            rel="noreferrer"
            aria-label="linkedin"
          >
            <Linkedin />
          </a>
        </li>
        <li>
          <a
            className="icon"
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="github"
          >
            <Github />
          </a>
        </li>
        <li>
          <a
            className="icon"
            href="/uploads/cv.pdf"
            aria-label="cv"
            title="Download CV"
          >
            <Download />
          </a>
        </li>
      </ul>
    </div>
  );
}

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="section">
      <div className="section-heading">
        <h1 className="mb0">{title}</h1>
      </div>
      <div className="section-body">{children}</div>
    </section>
  );
}
