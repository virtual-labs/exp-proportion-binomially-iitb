let p0 = 0.5;
let z_table_data = z_table.map((data) => {
    let arr = [];
    arr.push(data.z);
    arr.push(data['0.01']);
    arr.push(data['0.05']);
    return arr;
});
// let alpha_dd_options = [0.05, 0.01, 0.1];
// let alpha_dd_options = [0.05, 0.01];
let alpha_dd_options = [0.05];
// ======= Activity 1 variable ====== //
let n1 = 20;
let x1 = 9;
let p1_cap = 0.45;
let z1 = -0.447;
let alpha_a1 = 0.05;
let z_alpha_a1 = 0.31;
let SE_a1 = 0.111;
let ME_a1 = -0.05;
let CI_1_a1 = 0.5;
let CI_2_a1 = 0.4;
let a1_hypo_test_reject_op = 1;
// ========== activity2 variable ==========//
let n2 = 20;
let x2 = 12;
let p2_cap = 0.6;
let z2 = 0.894;
let alpha_a2 = 0.05;
let z_alpha_a2 = 0.827;
let SE_a2 = 0.11;
let ME_a2 = 0.098;
let CI_1_a2 = 0.502;
let CI_2_a2 = 0.698;
let a2_hypo_test_reject_op = 1;
// ========= activity3 variable ==========//
let n3 = 20;
let x3 = 4;
let p3_cap = 0.2;
let z3 = -2.683;
let alpha_a3 = 0.05;
let z_alpha_a3 = 0.003;
let SE_a3 = 0.089;
let ME_a3 = -0.239;
let CI_1_a3 = 0.439;
let CI_2_a3 = -0.039;
let a3_hypo_test_reject_op = 1;
// ========= activity4 variable ========== //
let CI_len_a1;
let CI_len_a2;
let CI_len_a3;
let best_proportion;
//# sourceMappingURL=data.js.map