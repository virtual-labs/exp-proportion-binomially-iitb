function activity2_p2() {
    let btn = (document.getElementById('act2-p1-btn-2'));
    btn && btn.remove();
    let btn_txt = get_collapse_btn_text('z-table', 'act2-z-table-div');
    maindiv.innerHTML += `
      ${btn_txt}
      <div class="collpase divide center-text" id="act2-z-table-div">
      <div class="fs-18px fb-500" style="text-align:left;">
      <div>
         If |z<sub>20</sub>| is in range of z<sub>&alpha;<sub>h</sub>/2</sub> then accept the null hypothesis i.e. the coin may be unbiased(fair). Else reject the null hypothesis i.e. coin is biased.
      </div>
      <div class="row justify-content-center fs-20px" style="align-items:center;">
         <div class="col-lg-3">
            $$ z_{\\alpha_h/2} = \\pm1.645 $$
         </div>
         <div class="col-lg-3">
         $$ z_{20} = \\frac{p\̂ _2- p_0}{\\sqrt{\\frac{p_0 . q_0}{n_2}}} = \\frac{p\̂ _2- p_0}{\\sqrt{\\frac{p_0(1-p_0)}{n_2}}} = ${z2} $$
         </div>
      </div>
      <div class="fs-16px">
         What do you conclude from this?
      </div>
      <br>
      <div class="row justify-content-center" style="align-items:center;">
         <div class="col-lg-5" >
            <button id="act2-null-hypo-btn1" onclick="a2_vf_null_hypo('1')" style='border: 1px solid gray; width: 100%; text-align: center;'>

               Coin is biased

            </button>
         </div>

         <div class="col-lg-5">
            <button id="act2-null-hypo-btn2" onclick="a2_vf_null_hypo('2')" style='border: 1px solid gray; width: 100%; text-align: center;'>
            
               Coin is unbiased (fair)
            
            </button>
         </div>
      </div>
      <br>
      <button class='btn btn-info std-btn' style='margin: auto; display: none;' id='act2-p2-btn-2' onclick='activity2_p3()' >Next</button>
   </div>
      </div>
   `;
    setTimeout(() => MathJax.typeset(), 50);
    hide_all_steps();
    setTimeout(() => {
        show_step('act2-z-table-div');
    }, 150);
    a2_find_null_hypothesis();
}
function a2_find_null_hypothesis() {
    if (Math.abs(z2) > -1.645 && Math.abs(z2) < 1.645) {
        a2_hypo_test_reject_op = 2;
    }
    else {
        a2_hypo_test_reject_op = 1;
    }
}
function a2_vf_null_hypo(id) {
    let msg = '';
    let btn = (document.getElementById(`act2-null-hypo-btn${id}`));
    let next_btn = (document.getElementById('act2-p2-btn-2'));
    if (a2_hypo_test_reject_op == 1) {
        msg = 'Null Hypothesis Rejected';
    }
    else if (a2_hypo_test_reject_op == 2) {
        msg = 'We failed to reject null hypothesis';
    }
    if (parseInt(id) == a2_hypo_test_reject_op) {
        alert(`You are correct!! ${msg}`);
        btn.style.backgroundColor = 'yellow';
        btn.removeEventListener('click', a2_vf_null_hypo);
        btn.removeAttribute('onclick');
        document
            .getElementById(`act2-null-hypo-btn${3 - id}`)
            .removeAttribute('onclick');
        next_btn.style.display = 'block';
    }
    else {
        alert(`You have chosen incorrect option, observe the results again.`);
    }
}
// activity2_p2();
//# sourceMappingURL=activity2_p2.js.map