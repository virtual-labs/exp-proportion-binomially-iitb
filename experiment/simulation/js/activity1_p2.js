function activity1_p2() {
    let btn = (document.getElementById('act1-p1-btn-2'));
    btn && btn.remove();
    let btn_txt = get_collapse_btn_text('z-table', 'act1-z-table-div');
    maindiv.innerHTML += `
      ${btn_txt}
      <div class="collpase divide center-text" id="act1-z-table-div">
      <div class="fs-18px fb-500" style="text-align:left;">
      <div>
         If |z<sub>10</sub>| is in range of z<sub>&alpha;<sub>h</sub>/2</sub> then accept the null hypothesis i.e. the coin may be unbiased(fair). Else reject the null hypothesis i.e. coin is biased.
      </div>
      <div class="row justify-content-center fs-20px" style="align-items:center;">
         <div class="col-lg-3">
            $$ z_{\\alpha_h/2} = \\pm1.645 $$
         </div>
         <div class="col-lg-3">
         $$ z_{10} = \\frac{p\̂ _1- p_0}{\\sqrt{\\frac{p_0 . q_0}{n_1}}} = \\frac{p\̂ _1- p_0}{\\sqrt{\\frac{p_0(1-p_0)}{n_1}}} = ${z1} $$
         </div>
      </div>
      <div class="fs-16px">
         What do you conclude from this?
      </div>
      <br>
      <div class="row justify-content-center " style="align-items:center;">
         <div class="col-lg-5" >
            <button id="act1-null-hypo-btn1" onclick="a1_vf_null_hypo('1')" style='border: 1px solid gray; width: 100%; text-align: center;'>

               Coin is biased

            </button>
         </div>

         <div class="col-lg-5">
            <button id="act1-null-hypo-btn2" onclick="a1_vf_null_hypo('2')" style='border: 1px solid gray; width: 100%; text-align: center;'>
            
               Coin is unbiased (fair)
            
            </button>
         </div>
      </div>
      <br>
      <button class='btn btn-info std-btn' style='margin: auto; display: none;' id='act1-p2-btn-2' onclick='activity1_p3()' >Next</button>
   </div>
      </div>
   `;
    setTimeout(() => MathJax.typeset(), 50);
    hide_all_steps();
    setTimeout(() => {
        show_step('act1-z-table-div');
    }, 150);
    a1_find_null_hypothesis();
}
// function a1_load_conclusion() {
// 	let div: HTMLDivElement = <HTMLDivElement>(
// 		document.getElementById('act1-z-table-div')
// 	);
// 	let btn: HTMLButtonElement = <HTMLButtonElement>(
// 		document.getElementById('act1-p2-btn-1')
// 	);
// 	btn && btn.remove();
// 	div.innerHTML += `
//       <br>
//       <div class="fs-18px fb-500" style="text-align:left;">
//          <div>
//             If |z<sub>10</sub>| &ge; z<sub>&alpha;<sub>h</sub>/2</sub> then reject the null hypothesis i.e. coin is biased. Else fail to reject the null hypothesis i.e. the coin may be unbiased(fair).
//          </div>
//          <div class="row justify-content-center fs-20px" style="align-items:center;">
//             <div class="col-lg-3">
//                $$ z_{\\alpha_h/2} = ${z_alpha_a1} $$
//             </div>
//             <div class="col-lg-3">
//             $$ z_{10} = \\frac{p\̂ _1- p_0}{\\sqrt{\\frac{p_0 . q_0}{n_1}}} = \\frac{p\̂ _1- p_0}{\\sqrt{\\frac{p_0(1-p_0)}{n_1}}} = ${z1} $$
//             </div>
//          </div>
//          <div class="fs-16px">
//             What do you conclude from this?
//          </div>
//          <br>
//          <div class="row justify-content-center " style="align-items:center;">
//             <div class="col-lg-5" >
//                <button id="act1-null-hypo-btn1" onclick="a1_vf_null_hypo('1')" style='border: 1px solid gray; width: 100%; text-align: center;'>
//                   Coin is biased
//                </button>
//             </div>
//             <div class="col-lg-5">
//                <button id="act1-null-hypo-btn2" onclick="a1_vf_null_hypo('2')" style='border: 1px solid gray; width: 100%; text-align: center;'>
//                   Coin is unbiased (fair)
//                </button>
//             </div>
//          </div>
//          <br>
//          <button class='btn btn-info std-btn' style='margin: auto; display: none;' id='act1-p2-btn-2' onclick='activity1_p3()' >Next</button>
//       </div>
//    `;
// 	setTimeout(() => MathJax.typeset(), 50);
// }
function a1_find_null_hypothesis() {
    if (Math.abs(z1) > -1.645 && Math.abs(z1) < 1.645) {
        a1_hypo_test_reject_op = 2;
    }
    else {
        a1_hypo_test_reject_op = 1;
    }
}
function a1_vf_null_hypo(id) {
    let msg = '';
    let btn = (document.getElementById(`act1-null-hypo-btn${id}`));
    let next_btn = (document.getElementById('act1-p2-btn-2'));
    if (a1_hypo_test_reject_op == 1) {
        msg = 'Null Hypothesis Rejected';
    }
    else if (a1_hypo_test_reject_op == 2) {
        msg = 'We failed to reject null hypothesis';
    }
    if (parseInt(id) == a1_hypo_test_reject_op) {
        alert(`You are correct!! ${msg}`);
        btn.style.backgroundColor = 'yellow';
        btn.removeEventListener('click', a1_vf_null_hypo);
        btn.removeAttribute('onclick');
        document
            .getElementById(`act1-null-hypo-btn${3 - id}`)
            .removeAttribute('onclick');
        next_btn.style.display = 'block';
    }
    else {
        alert(`You have chosen incorrect option, observe the results again.`);
    }
}
// activity1_p2();
//# sourceMappingURL=activity1_p2.js.map