import "../Projects.css";
import "./1.css";

import Section from "@/components/Section";

export default function FlashCardApp() {
  return (
    <main className="project-page">
      <Section title="Leetcode 75">
        <p>
          I already did basic data structures and algorithms course to know
          basics of Computer Science. I decided to complete Leetcode 75, which
          is a curated list of 75 essential problems divided into 22 groups.
        </p>
        <br />
        <ol className="project-list">
          <li className="crossed">Array / String</li>
          <li>Two pointers</li>
          <li>Sliding Window</li>
          <li>Prefix Sum</li>
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
        </ol>
      </Section>
    </main>
  );
}
