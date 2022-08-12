/**
 * Print all ids present array objects
 * @param {*} obj 
 */
function nArrTree(obj) {
  ans = traverse(obj, [])
  console.log(ans)
}

/**
 * post order traversal
 * @param {*} obj 
 * @param {*} ans 
 * @returns 
 */
function traverse(obj, ans) {
  if (obj !== null) {
    let total = obj.children.length;
    for (let i = 0; i < total; i++) {
      traverse(obj.children[i], ans)
    }
    ans.push(obj.id)
  }
  return ans
}

nArrTree({
  "id": 1,
  "children": [{
    "id": 2,
    "children": [{
      "id": 3,
      "children": [
      ]
    }]
  },
  {
    "id": 4,
    "children": [{
      "id": 5,
      "children": [{
        "id": 6,
        "children": [{
          "id": 7,
          "children": [
          ]
        }]
      }]
    }]
  }
  ]
})
