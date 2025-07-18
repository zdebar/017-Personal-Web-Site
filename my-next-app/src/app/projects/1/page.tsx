import "../Projects.css";
import "./1.css";

import Section from "@/components/Section";

export default function FlashCardApp() {
  return (
    <main className="project-page">
      <Section title="Leetcode 75">
        <p>
          I already did basic data structures and algorithms course. It is quite
          easy, I just need some practice to properly memorize them. I decided
          to complete Leetcode 75, which is a curated list of 75 essential
          problems.
        </p>
        <br />
        <h4></h4>
        <ul className="project-list">
          <li className="crossed">
            <span>Array / String</span>
            <span>17.07.25</span>
          </li>
          <li className="crossed">
            <span>Two pointers</span>
            <span>17.07.25</span>
          </li>
          <li className="crossed">
            <span>Sliding Window</span>
            <span>18.07.25</span>
          </li>
          <li className="crossed">
            <span>Prefix Sum</span>
            <span>18.07.25</span>
          </li>
          <li>Hash Map / Set</li>
          <li>Stack</li>
          <li>Queue</li>
          <li>Linked List</li>
          <li>Binary Tree – DFS</li>
          <li>Binary Tree – BFS</li>
          <li>Binary Search Tree</li>
          <li>Graphs – DFS</li>
          <li>Graphs – BFS</li>
          <li>Heap / Priority Queue</li>
          <li>Binary Search</li>
          <li>Bakctracking</li>
          <li>DP – 1D</li>
          <li>DP – Multimensional</li>
          <li>Bit Manipulation</li>
          <li>Trie</li>
          <li>Intervals</li>
          <li>Monotonic Stack</li>
        </ul>
        <br />
      </Section>
    </main>
  );
}
