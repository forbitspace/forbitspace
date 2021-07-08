import React from "react";
import styled from "styled-components";
import Link from "next/link";

import { Container, Row, Col } from "reactstrap";

const Index = () => {
  return (
    <BoxContent>
      <Container>
        <TitleToken>forbitswap V2 Bug Bounty</TitleToken>
        <QuestToken>Overview</QuestToken>
        <p>
          Open source, on-chain protocols benefit from community member
          participation in testing and debugging the smart contracts. As the
          launch of version 2 of the forbitswap protocol (“forbitswap V2”)
          approaches, it is beneficial to formalize the program incentivizing
          those dedicated security engineers who can help make forbitswap V2
          safer (the “Program”). The Program will bolster the professional
          audits and formal verification forbitswap V2 has undergone.
        </p>
        <QuestToken>Scope</QuestToken>
        <p>
          This Program is limited to the vulnerabilities affecting forbitswap V2
          in the following contracts:
        </p>
        <ListToken>
          <li className="color-blue">forbitswap Core</li>
          <li className="color-blue">Periphery Contracts</li>
        </ListToken>
        <p>
          For purposes of the Program, bugs in Periphery Contracts will be
          considered less severe than those found in forbitswap V2 Core.
        </p>
        <p>The following are not within the scope of the Program:</p>
        <ul>
          <li>
            The example contracts and the contracts in the test folder for the
            Periphery Contracts link set forth above;
          </li>
          <li>
            Any contract removed from the list of contracts in the Periphery
            Contracts link set forth above (such list may change from time to
            time without notice);
          </li>
          <li>
            Bugs in any third party contract or platform that interacts with
            forbitswap V2;
          </li>
          <li>
            Vulnerabilities already reported and/or discovered in contracts
            built by third parties on forbitswap V2; and
          </li>
          <li>Any already-reported bugs.</li>
        </ul>
        <p>
          Vulnerabilities contingent upon the occurrence of any of the following
          activities also are outside the scope of this Program:
        </p>
        <p>Front end bugs;</p>
        <ul>
          <li>DDOS attack;</li>
          <li>Spamming;</li>
          <li>Automated tools;</li>
          <li>Compromising or misusing third party systems or services.</li>
        </ul>
        <QuestToken>Program Rewards</QuestToken>
        <p>
          Severity of bugs will be assessed under the CVSS Risk Rating scale, as
          follows:
        </p>
        <ul>
          <li>Critical (9.0-10.0): Up to $40,000</li>
          <li>High (7.0-8.9): Up to $10,000</li>
          <li>Medium (4.0-6.9): Up to $2,000</li>
          <li>Low (0.1-3.9): Up to $1,000</li>
        </ul>
        <p>
          In addition to assessing severity, rewards will be considered based on
          the impact of the discovered vulnerability as well as the level of
          difficulty in discovering such vulnerability.
        </p>
        <p>
          Prior to the deployment of forbitswap V2 to the Ethereum mainnet,
          which is expected to occur in May 2020, successful bug reporters will
          receive a 20% bonus on their bounty pay out. This is to incentivize
          hackers to come forward before launch.
        </p>
        <QuestToken>Disclosure</QuestToken>
        <p>
          Any vulnerability or bug discovered must be reported only to the
          following email: contact@forbitswap.org; must not be disclosed
          publicly; must not be disclosed to any other person, entity or email
          address prior to disclosure to the contact@forbitswap.org email; and
          must not be disclosed in any way other than to the
          contact@forbitswap.org email. In addition, disclosure to
          contact@forbitswap.org must be made promptly following discovery of
          the vulnerability. Please include as much information about the
          vulnerability as possible, including:
        </p>
        <ul>
          <li>The conditions on which reproducing the bug is contingent.</li>
          <li>
            The steps needed to reproduce the bug or, preferably, a proof of
            concept.
          </li>
          <li>The potential implications of the vulnerability being abused.</li>
        </ul>
        <p>
          A detailed report of a vulnerability increases the likelihood of a
          reward and may increase the reward amount.
        </p>
        <p>
          Anyone who reports a unique, previously-unreported vulnerability that
          results in a change to the code or a configuration change and who
          keeps such vulnerability confidential until it has been resolved by
          our engineers will be recognized publicly for their contribution, if
          agreed.
        </p>
        <QuestToken>Eligibility</QuestToken>
        <p>To be eligible for a reward under this Program, you must:</p>
        <ul>
          <li>
            Discover a previously unreported, non-public vulnerability that
            would result in a loss of or a lock on any ERC-20 token on
            forbitswap V2 (but not on any third party platform interacting with
            forbitswap V2) and that is within the scope of this Program.
          </li>
          <li>
            Be the first to disclose the unique vulnerability to
            contact@forbitswap.org, in compliance with the disclosure
            requirements above.
          </li>
          <li>
            Provide sufficient information to enable our engineers to reproduce
            and fix the vulnerability.
          </li>
          <li>
            Not engage in any unlawful conduct when disclosing the bug to
            contact@forbitswap.org, including through threats, demands or any
            other coercive tactics.
          </li>
          <li>
            Not exploit the vulnerability in any way, including through making
            it public or by obtaining a profit (other than a reward under this
            Program).
          </li>
          <li>
            Make a good faith effort to avoid privacy violations, destruction of
            data, interruption or degradation of forbitswap V2.
          </li>
          <li>
            Submit only one vulnerability per submission, unless you need to
            chain vulnerabilities to provide impact regarding any of the
            vulnerabilities.
          </li>
          <li>
            Not submit a vulnerability caused by an underlying issue that is the
            same as an issue on which a reward has been paid under this Program.
          </li>
          <li>Be at least 18 years of age.</li>
          <li>
            Not be subject to US sanctions or reside in a US-embargoed country.
          </li>
          <li>
            Not be one of our current or former employees, vendors, or
            contractors or an employee of any of those vendors or contractors.
          </li>
          <li>Comply with all the eligibility requirements of the Program.</li>
        </ul>
        <QuestToken>Other Terms</QuestToken>
        <p>
          All reward decisions, including eligibility for and amounts of the
          rewards and the manner in which such rewards will be paid, are made at
          our sole discretion.
        </p>
        <p>
          The terms and conditions of this Program may be altered at any time.
        </p>
      </Container>
    </BoxContent>
  );
};

const BoxContent = styled.section`
  position: relative;
  padding: 40px 0;
  margin: 0 auto;
  max-width: 1000px;

  ul {
    li {
      list-style-type: disc;
    }
  }
`;

const GroupPra = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;

  p {
    font-size: 26px;
    font-weight: 500;
    text-align: center;

    span {
      display: block;
      font-size: 16px;
      color: #888;
    }
  }
`;

const TitleToken = styled.h3`
  font-size: 52px;
  font-weight: bold;
  margin-bottom: 40px;
`;

const ListToken = styled.ul`
  padding-left: 0;

  li {
    list-style-type: none !important;
  }
`;

const QuestToken = styled.p`
  font-size: 24px;
  color: #000000;
  font-weight: 500;
`;

export default Index;
