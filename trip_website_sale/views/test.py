def list_dap(self):
    return ['without_dap', 'expired_dap', 'valid_dap_lte_2m', 'valid_dap_gt_2m']
def get_project_with_good_package(package, medical_file_matchs, values,dap_domain,thersholds_domain, **kw):
    domain_dap_searched, thresholds_searched = [], []
    list_dap = list_dap()
    for element in list_dap:
        domain_dap_searched += dap_domain[element] if kw.get(element, 'off') == 'on' else []

    # Filter THRESHOLDS
    thresholds_searched += thersholds_domain['average_compliance'] if kw.get('average_compliance', 'off') == 'on' else []
    thresholds_searched += thersholds_domain['regularity_compliance'] if kw.get('regularity_compliance', 'off') == 'on' else []
    thresholds_searched += thersholds_domain['average_ahi'] if kw.get('average_ahi', 'off') == 'on' else []
    thresholds_searched += thersholds_domain['average_sealing'] if kw.get('average_sealing', 'off') == 'on' else []


    # FILTER PACKAGE
    medical_file_matchs = []
    if package in ['sro', 'nt1', 'nt2', 'nt3', 'tl1', 'tl2', 'tl3']:
        medical_file_matchs = get_project_with_good_package(package, medical_file_matchs, values)
    if medical_file_matchs:
        domain += [('id', 'in', list(set(medical_file_matchs)))]
    if domain_dap_searched:
        domain += [('id', 'in', list(set(domain_dap_searched)))]
    if thresholds_searched:
        domain += [('patient_id', 'in', list(set(thresholds_searched)))]
    return domain
