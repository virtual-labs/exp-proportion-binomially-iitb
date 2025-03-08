function activity4() {
    let btn = (document.getElementById('act3-p3-btn-3'));
    btn && btn.remove();
    let text = `

   <div class='divide'>
   <div style='margin-top: 2vw;'>
   <h4 class="center-text fs-28px fb-700">Hypothesis testing</h4>
   <p class="center-text fs-20px fb-600">Testing the proportion of a Binomially distributed variable.</p>
   <br><br>
   
   <h4 class="fb-700 fs-28px" style="text-align:center">Activity 4</h4>
      <br><br>

      <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act4();' id='act4-temp-btn-1' >Next</button>
   </div>
   </div>
   `;
    maindiv.innerHTML += text;
    hide_all_steps();
    a4_internal_calculation_1();
}
function start_act4() {
    let btn = (document.getElementById('act4-temp-btn-1'));
    btn && btn.remove();
    let btn_txt = get_collapse_btn_text('Best Proportion', 'act4-div');
    maindiv.innerHTML += `
      ${btn_txt}
      <div class="collapse divide fs-16px" id="act4-div">
         <h4 style="text-align:left;" class="fs-20px fb-800" >
            Best Proportion:
         </h4>
         <br>
         <div>
            <p>
               Now we will see which experiment gives us best proportion.
            </p>
            <div>
               <p>
                  Now we have,
               </p>
               <div class="row justify-content-center" style="align-items:center;">
                  <div class="col-lg-4 fs-18px fb-500">
                     CI<sub>1</sub> = (${CI_1_a1}, ${CI_2_a1})
                  </div>
                  <div class="col-lg-4 fs-18px fb-500">
                     CI<sub>2</sub> = (${CI_1_a2}, ${CI_2_a2})
                  </div>
                  <div class="col-lg-4 fs-18px fb-500">
                     CI<sub>3</sub> = (${CI_1_a3}, ${CI_2_a3})
                  </div>
               </div>
            </div>
         </div>
         <br>
         <p>
            The length of interval is inversely proportional to accuracy i.e. higher length implies less accuracy and proportion.
         </p>
         <div>
            So which of the following activity gave us best proportion?
         </div>

         <div class="center-text">
            <div>
               <button id="act4-conclude-btn1" onclick="a4_vf_conslusion('1')" style='margin:5px 0; border: 1px solid gray; width: 60%; text-align: center;'>Activity 1</button>
            </div>
            <div>
               <button id="act4-conclude-btn2" onclick="a4_vf_conslusion('2')" style='margin:5px 0; border: 1px solid gray; width: 60%; text-align: center;'>Activity 2</button>
            </div>
            <div>
               <button id="act4-conclude-btn3" onclick="a4_vf_conslusion('3')" style='margin:5px 0; border: 1px solid gray; width: 60%; text-align: center;'>Activity 3</button>
            </div>
         </div>
         <br>
         <button class='btn btn-info std-btn' style='margin: auto; display: none;' id='act4-btn-1' onclick='a4_load_theory()' >Next</button>
      </div>
   `;
    setTimeout(() => {
        show_step('act4-div');
    }, 150);
}
function a4_internal_calculation_1() {
    CI_len_a1 = 0;
    CI_len_a2 = 0;
    CI_len_a3 = 0;
    CI_len_a1 = parseFloat(Math.abs(CI_1_a1 - CI_2_a1).toFixed(3));
    CI_len_a2 = parseFloat(Math.abs(CI_1_a2 - CI_2_a2).toFixed(3));
    CI_len_a3 = parseFloat(Math.abs(CI_1_a3 - CI_2_a3).toFixed(3));
    let min_len = Math.min(CI_len_a1, Math.min(CI_len_a2, CI_len_a3));
    best_proportion = min_len === CI_len_a1 ? 1 : min_len === CI_len_a2 ? 2 : 3;
    console.log(CI_len_a1, CI_len_a2, CI_len_a3);
    console.log(best_proportion);
}
function a4_vf_conslusion(id) {
    let btn = (document.getElementById(`act4-conclude-btn${id}`));
    let next_btn = (document.getElementById('act4-btn-1'));
    if (parseInt(id) == best_proportion) {
        alert(`You are correct!!`);
        btn.style.backgroundColor = 'yellow';
        btn.removeAttribute('onclick');
        switch (parseInt(id)) {
            case 1:
                document
                    .getElementById(`act4-conclude-btn2`)
                    .removeAttribute('onclick');
                document
                    .getElementById(`act4-conclude-btn3`)
                    .removeAttribute('onclick');
                break;
            case 2:
                document
                    .getElementById(`act4-conclude-btn1`)
                    .removeAttribute('onclick');
                document
                    .getElementById(`act4-conclude-btn3`)
                    .removeAttribute('onclick');
                break;
            default:
                document
                    .getElementById(`act4-conclude-btn1`)
                    .removeAttribute('onclick');
                document
                    .getElementById(`act4-conclude-btn2`)
                    .removeAttribute('onclick');
                break;
        }
        next_btn.style.display = 'block';
    }
    else {
        alert(`You have chosen incorrect option, observe the results again.`);
    }
}
function a4_load_theory() {
    let btn = (document.getElementById('act4-btn-1'));
    btn && btn.remove();
    let div = (document.getElementById('act4-div'));
    div.innerHTML += `
      <div>
         As we know that
         $$ CI = \\left(p\̂ - |ME| , p\̂ + |ME| \\right) $$

         If the margin of error get less then accuracy in proportion increases. Also we know that

         $$ ME = z \× \\sqrt{\\frac{p\̂ q\̂ }{n}} \⇒ ME \∝ \\frac{1}{\\sqrt{n}}  $$

         Hence number if trials may leads to accurate proportion of binomial distribution as Confidence interval will get smaller as Margin of error tends to zero.
         
         <br>

         But along with that number of heads also matters here. As sample probability also important parameter. If number of heads more or less (large variance) than half of number of trials then we will get higher error which results biased coin.

         <br>

         So number of success events must be near to half of number of trials. This will results more accuracy in proportion.

      </div>
   `;
    setTimeout(() => MathJax.typeset(), 50);
}
// activity4();
//# sourceMappingURL=activity4.js.map