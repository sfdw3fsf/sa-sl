//MEDIUM

// Given a string s, find the length of the longest substring without duplicate characters.

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

// Constraints:

// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.

export function lengthOfLongestSubstring(s: string): number {
   console.log('Received string', s)
   if (s.length < 0 || s.length >= 5 * 104) return 0

   let max = s === '' ? 0 : 1

   for (let i = 0; i < s.length - 1; i++) {
      let string = s[i]
      let count = 1 // because string already take 1
      for (let j = i + 1; j < s.length; j++) {
         console.log('s[j]', s[j])
         if (!string.includes(s[j])) {
            string += s[j]
            count += 1
         } else {
            break
         }
         // Has a case that if all is bbbbb then max will never be executed, risky when we defined max = 0
         console.log('count', count)
         max = max > count ? max : count
      }
   }

   return max
}

//Faster By Other Dev

// // We can solve this using a dynamic "sliding window" that
// shrinks or grows whenever certain conditions are met

// const lengthOfLongestSubstring = function(characters: string) {
//   // Setting to 0 takes care of the edge case where "characters" is ''
//   let length = 0

//   // Map will store each character and the last index they were looped over at
//   let characterMap = new Map()

//   // We declare a left index since a sliding window requires two indices
//   // (left and right) to track the window of elements the indices surround
//   let leftIndex = 0

//   // Begin looping through each character in the string.
//   // rightIndex will always be greater the leftIndex to create a "window" of elements
//   for (let rightIndex = 0; rightIndex < characters.length; rightIndex++) {

//       // Get current character for better readability
//       const character = characters[rightIndex]

//       // Check if character exists and if its last index is greater than the
//       // current leftIndex. If we don't check it's leftIndex, we're setting
//       // it to a previous result which'll provide incorrect values
//       // when calculating the window length
//       if (characterMap.has(character) && characterMap.get(character) >= leftIndex) {
//           // set left index to last index where the character was found plus one
//           leftIndex = characterMap.get(character) + 1
//       }

//       // Which is greater, the last iteration's window length, or the current
//       // interation's window length? We decide here, then set our result length
//       // to that number. We add 1 since we need to take into account every element
//       // within the window (2 - 0 = 2, although there are three elements, so add 1)
//       length = Math.max(length, rightIndex - leftIndex + 1)

//       // Add character and its index to map, or, if it exists,
//       // automatically overwrite its index with the current
//       characterMap.set(character, rightIndex)
//   }

//   return length
// };
