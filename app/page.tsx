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
    abstract: `This paper examines the puzzling heterogeneity in completion rates of open market
repurchase programs, where some announcing firms execute zero repurchases while
some complete their programs rapidly. I propose the disagreement resolution
horizon hypothesis (DRHH), which argues that completion rates reflect managers’
expectations about when their disagreement with the market will naturally resolve.
Using hand-collected data from SEC filings (2004-2022), I document three key
findings. First, low-completion firms significantly outperform analyst expectations
in years one and two post-announcement, while high-completion firms excel in years
three and four. Second, this pattern is reflected in market reactions, with significant
positive returns around earnings announcements occurring in corresponding periods.
Third, while all announcing firms earn significant long-run abnormal returns, the
timing of return realization systematically varies with completion rates. These
results suggest that managers strategically balance duration-dependent costs of
undervaluation against immediate costs of share repurchases, with their completion
decisions signaling the expected timeline of information asymmetry resolution. The
findings extend traditional signaling theories by highlighting how the temporal
dimension of information asymmetry influences corporate payout policy.`
  },
  {
    title: "Open Market Repurchase Programs and Systematic Liquidity",
    href: "/uploads/omr-systematic-liquidity.pdf",
    abstract: `This study examines how open market repurchase (OMR) programs affect firms’
exposure to systematic liquidity shocks and liquidity risk. Consistent with the
view of repurchasing firms as buyers of last resort, I find: (1) firms experience a
significant decline in liquidity commonality during OMR programs; (2) this decline
is temporary, with liquidity commonality reverting to pre-program levels once repurchases
end; (3) during these programs, firms stabilize against both variation in
the demand for liquidity by institutional investors and variation in the supply of
liquidity by market makers; and (4) the temporary reduction in liquidity commonality
is accompanied by a temporary reduction in firms’ liquidity risk. Together,
these results highlight a less emphasized aspect of OMR programs: the role of
firms’ trading activity in shaping their liquidity dynamics and risk exposures.`
  },
  {
    title: "Mispricing, Mutual Fund Flows, and Corporate Buybacks",
    href: "/uploads/mispricing-flows-buybacks.pdf",
    abstract: `Using price pressure induced by mutual fund flows, I show that firms significantly
adjust their repurchase activity in response to undervaluation. Repurchase behavior
is captured both by the likelihood of announcing open market repurchase
(OMR) programs and the quarterly amount repurchased. Leveraging the 2003
mutual fund trading scandal as a natural experiment, I provide causal evidence
that flow-induced valuation shocks drive repurchase decisions, with instrumental
variable estimates revealing stronger effects than standard regressions imply.
Further analysis of long-run stock performance reveals that the well-documented
buyback anomaly is primarily driven by repurchase announcements following periods
of negative fund flows. These findings point to limits to arbitrage as a key
explanation for the slow correction of undervaluation in repurchasing firms and
demonstrate how fund flows influence both corporate repurchase decisions and the
market’s price response to those announcements.`
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
            <h3 className="h3">Dissertation Chapters</h3>
            <ul className="paper-list">
              {PAPERS.map((p) => (
                <li key={p.title} className="paper">
                  <a className="paper-title" href={p.href} target="_blank" rel="noreferrer">
                    {p.title}
                  </a>
                  <details className="paper-abs">
                    <summary>Abstract</summary>
                    <p className="p-md">{p.abstract}</p>
                  </details>
                </li>
              ))}
            </ul>
          </Section>


          <Section id="teaching" title="Teaching">
            <p className="p-md">
              I teach across LSE’s undergraduate and Summer School programmes, with a focus on
              derivatives, risk management, and core corporate finance. Across cohorts I’ve
              consistently received strong student feedback.
            </p>
          
            <ul className="list">
              {/* Summer School */}
              <li>FM360 — Options, Futures & Other Financial Derivatives (Evaluation: 4.x/5) Summer 2025</li>
              <li>FM202 — Analysis and Management of Financial Risk (Evaluation: 4.8/5) Summer 2024 </li>
              <li>FM202 — Analysis and Management of Financial Risk (Evaluation: 4.6 /5)Summer 2023</li>
          
              {/* Term-time teaching */}
              <li>FM215 — Principles of Finance II (Evaluation: 4.9/5) 2024–202)</li>
              <li>FM214 — Principles of Finance I (Evaluation: 4.8/5) 2023–2024</li>
              <li>FM213 — Principles of Finance  (Evaluation: 4.7/5) 2022–2023</li>
            </ul>
          
            {/* If you want to add evaluations later, just append (Evaluation: 4.x/5) to each line. */}
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
