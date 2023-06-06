export async function decision () {
  return new Promise(function (resolve, reject) {
    const decision = document.createElement('div')
    decision.classList.add('decision')
    decision.innerHTML = '<span>Are you sure?</span><br /><button id="btn_yes">YES</button><button id="btn_no">NO</button>'
    document.body.appendChild(decision)
    decision.style.animation = 'slideInDown 0.5s ease'
    document.querySelector('#btn_yes').addEventListener('click', function () {
      resolve()
    })
    document.querySelector('#btn_no').addEventListener('click', function () {
      reject(new Error(''))
    })
  })
}
