import "../Projects.css";
import "./1.css";

import Section from "@/components/Section";

export default function FlashCardApp() {
  return (
    <main className="project-page">
      <Section title="Leetcode 75">
        <p>
          I have already completed a basic data structures and algorithms
          course. I decided to continue with Leetcode 75, which is a curated
          list of 75 essential problems divided into 22 categories, so I can
          properly memorize them through practice.
        </p>
        <br />
        <ul className="project-list">
          <li className="crossed">
            Array / String
            <ol>
              <li className="crossed">Merge Strings Alternatively</li>
              <li className="crossed">Greatest Common Divisor of Strings</li>
              <li className="crossed">
                Kids With the Greatest Number of Candies
              </li>
              <li className="crossed">Can Place Flowers</li>
              <li className="crossed">Reverse Vowels of a String</li>
              <li className="crossed">Reverse Words in a String</li>
              <li className="crossed">Product of Array Except Self</li>
              <li className="crossed">Increasing Triplet Subsequence</li>
              <li className="crossed">String Compression</li>
            </ol>
          </li>
          <br />
          <li className="crossed">
            Two pointers
            <ol start={10}>
              <li className="crossed">Move Zeroes</li>
              <li className="crossed">Is Subsequence</li>
              <li className="crossed">Container With Most Water</li>
              <li className="crossed">Max Number of K-Sum Pairs</li>
            </ol>
          </li>
          <br />
          <li className="crossed">
            Sliding Window
            <ol start={14}>
              <li className="crossed">Maximum Average Subarray I</li>
              <li className="crossed">
                Maximum Number of Vowels in a Substring of Given Length
              </li>
              <li className="crossed">Max Consecutive Ones III</li>
              <li className="crossed">
                Longest Subarray of 1&#39;s After Deleting One Element
              </li>
            </ol>
          </li>
          <br />
          <li className="crossed">
            Prefix Sum
            <ol start={18}>
              <li className="crossed">Find the Highest Altitued</li>
              <li className="crossed">Find Pivot Index</li>
            </ol>
          </li>
          <br />
          <li className="crossed">
            Hash Map / Set
            <ol start={20}>
              <li className="crossed">Find the Difference of Two Arrays</li>
              <li className="crossed">Unique Number of Occurences</li>
              <li className="crossed">Determine If Two Strins Are Close</li>
              <li className="crossed">Equal Row and Column Pairs</li>
            </ol>
          </li>
          <br />
          <li className="crossed">
            Stack
            <ol start={24}>
              <li className="crossed">Removing Stars From a String</li>
              <li className="crossed">Asteroid Collision</li>
              <li className="crossed">Decode String</li>
            </ol>
          </li>
          <br />
          <li className="crossed">
            Queue
            <ol start={27}>
              <li className="crossed">Number of Recent Calls</li>
              <li className="crossed">Dota2 Senate</li>
            </ol>
          </li>
          <br />
          <li className="crossed">
            Linked List
            <ol start={29}>
              <li className="crossed">
                Delete the Middle Node of a Linked List
              </li>
              <li className="crossed">Odd Even Linked List</li>
              <li className="crossed">Reverse Linked List</li>
              <li className="crossed">Maximum Twin Sum of a Linked List</li>
            </ol>
          </li>
          <br />
          <li>
            Binary Tree – DFS
            <ol start={33}>
              <li className="crossed">Maximum Depth of Binary Tree</li>
              <li>Leaf-Similar Trees</li>
              <li>Count Good Nodes in Binary Tree</li>
              <li>Path Sum III</li>
              <li>Longest ZigZag Path in a Binary Tree</li>
            </ol>
          </li>
          <br />
          <li>
            Binary Tree – BFS
            <ol start={38}>
              <li>Binary Tree Right Side View</li>
              <li>Maximum Level Sum of a Binary Tree</li>
            </ol>
          </li>
          <br />
          <li>
            Binary Search Tree
            <ol start={40}>
              <li>Search in a Binary Search Tree</li>
              <li>Delete Node in a BST</li>
            </ol>
          </li>
          <br />
          <li>
            Graphs – DFS
            <ol start={42}>
              <li>Keys and Rooms</li>
              <li>Number of Provinces</li>
              <li>Reorder Routes to Make All Paths Lead to the City Zero</li>
              <li>Evaluate Division</li>
            </ol>
          </li>
          <br />
          <li>
            Graphs – BFS
            <ol start={46}>
              <li>Nearest Exist from Entrance in Maxe</li>
              <li>Rotting Oranges</li>
            </ol>
          </li>
          <br />
          <li>
            Heap / Priority Queue
            <ol start={48}>
              <li>Kth Largest Element in an Array</li>
              <li>Smallest Number in Infinite Set</li>
              <li>Maximum Subsequence Score</li>
              <li>Total Cost to Hire K Workers</li>
            </ol>
          </li>
          <br />
          <li>
            Binary Search
            <ol start={52}>
              <li>Guess Number Higher or Lower</li>
              <li>Successful Pairs of Spells and Potions</li>
              <li>Find Peak Element</li>
              <li>Koko Eating Bananas</li>
            </ol>
          </li>
          <br />
          <li>
            Bakctracking
            <ol start={56}>
              <li>Letter Combinations of a Phone Number</li>
              <li>Combination Sum III</li>
            </ol>
          </li>
          <br />
          <li>
            DP – 1D
            <ol start={58}>
              <li>N-th Tribonacci Number</li>
              <li>Min Cost Climbing Stairs</li>
              <li>House Robber</li>
              <li>Domino and Tromino Tiling</li>
            </ol>
          </li>
          <br />
          <li>
            DP – Multimensional
            <ol start={62}>
              <li>Unique Paths</li>
              <li>Longest Common Subsequence</li>
              <li>Best Time to Buy and Sell Stock with Transaction Fee</li>
              <li>Edit Distance</li>
            </ol>
          </li>
          <br />
          <li className="crossed">
            Bit Manipulation
            <ol start={66}>
              <li className="crossed">Counting Bits</li>
              <li className="crossed">Single Number</li>
              <li className="crossed">
                Minimum Flips to Make a OR b Equal to c
              </li>
            </ol>
          </li>
          <br />
          <li>
            Trie
            <ol start={69}>
              <li>Implement Trie (Prefix Tree)</li>
              <li>Search Suggestion System</li>
            </ol>
          </li>
          <br />
          <li>
            Intervals
            <ol start={71}>
              <li>Non-overlapping Intervals</li>
              <li>Minimum Number of Arrows to Burst Balloons</li>
            </ol>
          </li>
          <br />
          <li>
            Monotonic Stack
            <ol start={73}>
              <li>Daily Temperatures</li>
              <li>Online Stock Span</li>
            </ol>
          </li>
        </ul>
      </Section>
    </main>
  );
}
