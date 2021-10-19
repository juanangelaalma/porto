const stripHtml = (html) => {
  let tmp = document.createElement('div')
  tmp.innerHTML = html
  console.log(tmp.textContent)
  console.log(tmp)

  return tmp.textContent || tmp.innerText || ""
}

export default stripHtml