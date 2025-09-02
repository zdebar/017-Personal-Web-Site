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
          <li className="crossed">
            Binary Tree – DFS
            <ol start={33}>
              <li className="crossed">Maximum Depth of Binary Tree</li>
              <li className="crossed">Leaf-Similar Trees</li>
              <li className="crossed">Count Good Nodes in Binary Tree</li>
              <li className="crossed">Path Sum III</li>
              <li className="crossed">Longest ZigZag Path in a Binary Tree</li>
            </ol>
          </li>
          <br />
          <li className="crossed">
            Binary Tree – BFS
            <ol start={38}>
              <li className="crossed">Binary Tree Right Side View</li>
              <li className="crossed">Maximum Level Sum of a Binary Tree</li>
            </ol>
          </li>
          <br />
          <li className="crossed">
            Binary Search Tree
            <ol start={40}>
              <li className="crossed">Search in a Binary Search Tree</li>
              <li className="crossed">Delete Node in a BST</li>
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
          <li className="crossed">
            Heap / Priority Queue
            <ol start={48}>
              <li className="crossed">Kth Largest Element in an Array</li>
              <li className="crossed">Smallest Number in Infinite Set</li>
              <li className="crossed">Maximum Subsequence Score</li>
              <li className="crossed">Total Cost to Hire K Workers</li>
            </ol>
          </li>
          <br />
          <li className="crossed">
            Binary Search
            <ol start={52}>
              <li className="crossed">Guess Number Higher or Lower</li>
              <li className="crossed">
                Successful Pairs of Spells and Potions
              </li>
              <li className="crossed">Find Peak Element</li>
              <li className="crossed">Koko Eating Bananas</li>
            </ol>
          </li>
          <br />
          <li>
            Backtracking
            <ol start={56}>
              <li>Letter Combinations of a Phone Number</li>
              <li>Combination Sum III</li>
            </ol>
          </li>
          <br />
          <li className="crossed">
            DP – 1D
            <ol start={58}>
              <li className="crossed">N-th Tribonacci Number</li>
              <li className="crossed">Min Cost Climbing Stairs</li>
              <li className="crossed">House Robber</li>
              <li className="crossed">Domino and Tromino Tiling</li>
            </ol>
          </li>
          <br />
          <li className="crossed">
            DP – Multimensional
            <ol start={62}>
              <li className="crossed">Unique Paths</li>
              <li className="crossed">Longest Common Subsequence</li>
              <li className="crossed">
                Best Time to Buy and Sell Stock with Transaction Fee
              </li>
              <li className="crossed">Edit Distance</li>
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
          <li className="crossed">
            Trie
            <ol start={69}>
              <li className="crossed">Implement Trie (Prefix Tree)</li>
              <li className="crossed">Search Suggestion System</li>
            </ol>
          </li>
          <br />
          <li className="crossed">
            Intervals
            <ol start={71}>
              <li className="crossed">Non-overlapping Intervals</li>
              <li className="crossed">
                Minimum Number of Arrows to Burst Balloons
              </li>
            </ol>
          </li>
          <br />
          <li className="crossed">
            Monotonic Stack
            <ol start={73}>
              <li className="crossed">Daily Temperatures</li>
              <li className="crossed">Online Stock Span</li>
            </ol>
          </li>
        </ul>
      </Section>
    </main>
  );
}
