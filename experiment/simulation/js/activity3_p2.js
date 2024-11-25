function activity3_p2() {
    let btn = (document.getElementById('act3-p1-btn-2'));
    btn && btn.remove();
    let btn_txt = get_collapse_btn_text('z-table', 'act3-z-table-div');
    maindiv.innerHTML += `
      ${btn_txt}
      <div class="collpase divide center-text" id="act3-z-table-div">
      <div class="fs-18px fb-500" style="text-align:left;">
      <div>
         If |z<sub>30</sub>| is in range of z<sub>&alpha;<sub>h</sub>/2</sub> then accept the null hypothesis i.e. the coin may be unbiased(fair). Else reject the null hypothesis i.e. coin is biased.
      </div>
      <div class="row justify-content-center fs-20px" style="align-items:center;">
         <div class="col-lg-3">
            $$ z_{\\alpha_h/2} = \\pm1.645 $$
         </div>
         <div class="col-lg-3">
         $$ z_{30} = \\frac{p\̂ _3- p_0}{\\sqrt{\\frac{p_0 . q_0}{n_3}}} = \\frac{p\̂ _3- p_0}{\\sqrt{\\frac{p_0(1-p_0)}{n_3}}} = ${z3} $$
         </div>
      </div>
      <div class="fs-16px">
         What do you conclude from this?
      </div>
      <br>
      <div class="row justify-content-center" style="align-items:center;">
         <div class="col-lg-5" >
            <button id="act3-null-hypo-btn1" onclick="a3_vf_null_hypo('1')" style='border: 1px solid gray; width: 100%; text-align: center;'>

               Coin is biased

            </button>
         </div>

         <div class="col-lg-5">
            <button id="act3-null-hypo-btn2" onclick="a3_vf_null_hypo('2')" style='border: 1px solid gray; width: 100%; text-align: center;'>

               Coin is unbiased (fair)

            </button>
         </div>
      </div>
      <br>
      <button class='btn btn-info std-btn' style='margin: auto; display: none;' id='act3-p2-btn-2' onclick='activity3_p3()' >Next</button>
   </div>
      </div>
   `;
    setTimeout(() => MathJax.typeset(), 50);
    hide_all_steps();
    setTimeout(() => {
        show_step('act3-z-table-div');
    }, 150);
    a3_find_null_hypothesis();
}
function a3_load_conclusion() {
    let div = (document.getElementById('act3-z-table-div'));
    let btn = (document.getElementById('act3-p2-btn-1'));
    btn && btn.remove();
    div.innerHTML += `
      <br>
      
   `;
    setTimeout(() => MathJax.typeset(), 50);
}
function a3_find_null_hypothesis() {
    if (Math.abs(z3) > -1.645 && Math.abs(z3) < 1.645) {
        a3_hypo_test_reject_op = 2;
    }
    else {
        a3_hypo_test_reject_op = 1;
    }
}
function a3_vf_null_hypo(id) {
    let msg = '';
    let btn = (document.getElementById(`act3-null-hypo-btn${id}`));
    let next_btn = (document.getElementById('act3-p2-btn-2'));
    if (a3_hypo_test_reject_op == 1) {
        msg = 'Null Hypothesis Rejected';
    }
    else if (a3_hypo_test_reject_op == 2) {
        msg = 'We failed to reject null hypothesis';
    }
    if (parseInt(id) == a3_hypo_test_reject_op) {
        alert(`You are correct!! ${msg}`);
        btn.style.backgroundColor = 'yellow';
        btn.removeEventListener('click', a3_vf_null_hypo);
        btn.removeAttribute('onclick');
        document
            .getElementById(`act3-null-hypo-btn${3 - id}`)
            .removeAttribute('onclick');
        next_btn.style.display = 'block';
    }
    else {
        alert(`You have chosen incorrect option, observe the results again.`);
    }
}
// activity3_p2();
//# sourceMappingURL=activity3_p2.js.map