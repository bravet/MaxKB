export default {
  title: '系統設置',
  authentication: {
    title: '登入認證',
    ldap: {
      title: 'LDAP 設定',
      address: 'LDAP 位址',
      serverPlaceholder: '請輸入LDAP 位址',
      bindDN: '綁定DN',
      bindDNPlaceholder: '請輸入綁定 DN',
      password: '密碼',
      passwordPlaceholder: '請輸入密碼',
      ou: '使用者OU',
      ouPlaceholder: '請輸入使用者 OU',
      ldap_filter: '使用者過濾器',
      ldap_filterPlaceholder: '請輸入使用者過濾器',
      ldap_mapping: 'LDAP 屬性對應',
      ldap_mappingPlaceholder: '請輸入 LDAP 屬性對應',
      test: '測試連線',
      enableAuthentication: '啟用 LDAP 認證',
      save: '儲存',
      testConnectionSuccess: '測試連線成功',
      testConnectionFailed: '測試連線失敗'
    },
    cas: {
      title: 'CAS 設定',
      ldpUri: 'ldpUri',
      ldpUriPlaceholder: '請輸入ldpUri',
      validateUrl: '驗證位址',
      validateUrlPlaceholder: '請輸入驗證位址',
      redirectUrl: '回呼位址',
      redirectUrlPlaceholder: '請輸入回呼位址',
      enableAuthentication: '啟用 CAS 認證'
    },
    oidc: {
      title: 'OIDC 設定',
      authEndpoint: '授權端位址',
      authEndpointPlaceholder: '請輸入授權端位址',
      tokenEndpoint: 'Token端位址',
      tokenEndpointPlaceholder: '請輸入 Token 端位址',
      userInfoEndpoint: '使用者資訊端位址',
      userInfoEndpointPlaceholder: '請輸入使用者資訊端位址',
      clientId: '用戶端 ID',
      clientIdPlaceholder: '請輸入用戶端 ID',
      clientSecret: '用戶端密鑰',
      clientSecretPlaceholder: '請輸入用戶端密鑰',
      logoutEndpoint: '登出端位址',
      logoutEndpointPlaceholder: '請輸入登出端位址',
      redirectUrl: '回呼位址',
      redirectUrlPlaceholder: '請輸入回呼位址',
      enableAuthentication: '啟用 OIDC 認證'
    },

    oauth2: {
      title: 'OAuth2 設定',
      authEndpoint: '授權端位址',
      authEndpointPlaceholder: '請輸入授權端位址',
      tokenEndpoint: 'Token 端位址',
      tokenEndpointPlaceholder: '請輸入 Token 端位址',
      userInfoEndpoint: '使用者資訊端位址',
      userInfoEndpointPlaceholder: '請輸入使用者資訊端位址',
      scope: '連線範圍',
      scopePlaceholder: '請輸入連線範圍',
      clientId: '用戶端 ID',
      clientIdPlaceholder: '請輸入用戶端 ID',
      clientSecret: '用戶端密鑰',
      clientSecretPlaceholder: '請輸入用戶端密鑰',
      redirectUrl: '回呼位址',
      redirectUrlPlaceholder: '請輸入回呼位址',
      filedMapping: '欄位對應',
      filedMappingPlaceholder: '請輸入欄位對應',
      enableAuthentication: '啟用 OAuth2 認證'
    },
    scanTheQRCode: {
      title: '掃碼登入',
      wecom: '企業微信',
      dingtalk: '釘釘',
      lark: '飛書',
      effective: '有效',
      alreadyTurnedOn: '已開啟',
      notEnabled: '未開啟',
      validate: '驗證',
      validateSuccess: '驗證成功',
      validateFailed: '驗證失敗',
      validateFailedTip: '請填寫所有必填項並確保格式正確',
      appKeyPlaceholder: '請輸入 App Key',
      appSecretPlaceholder: '請輸入 App Secret',
      corpIdPlaceholder: '請輸入 Corp Id',
      agentIdPlaceholder: '請輸入 Agent Id',
      callbackWarning: '請輸入有效的 URL 位址'
    }
  },
  theme: {
    title: '外觀設置',
    platformDisplayTheme: '平台顯示主題',
    customTheme: '自定義主題',
    platformLoginSettings: '平台登錄設置',
    custom: '自定義',
    pagePreview: '頁面預覽',
    default: '默認',
    restoreDefaults: '恢復默認',
    orange: '活力橙',
    green: '松石綠',
    purple: '神秘紫',
    red: '胭脂紅',
    loginBackground: '登錄背景圖',
    loginLogo: '登錄 Logo',
    websiteLogo: '網站 Logo',
    replacePicture: '替換圖片',
    websiteLogoTip: '頂部網站顯示的 Logo，建議尺寸 48*48，支持 JPG、PNG、GIF，大小不超過 10MB',
    loginLogoTip: '登錄頁面右側 Logo，建議尺寸 204*52，支持 JPG、PNG、GIF，大小不超過 10 MB',
    loginBackgroundTip:
      '左側背景圖，矢量圖建議尺寸 576*900，位圖建議尺寸 1152*1800；支持 JPG、PNG、GIF，大小不超過 10 MB',
    websiteName: '網站名稱',
    websiteNamePlaceholder: '請輸入網站名稱',
    websiteNameTip: '顯示在網頁 Tab 的平台名稱',
    websiteSlogan: '歡迎語',
    websiteSloganPlaceholder: '請輸入歡迎語',
    websiteSloganTip: '產品 Logo 下的歡迎語',
    defaultSlogan: '歡迎使用 MaxKB 智能知識庫問答系統',
    defaultTip: '默認為 MaxKB 登錄界面，支持自定義設置',
    platformSetting: '平台設置',
    showUserManual: '顯示用戶手冊',
    showForum: '顯示論壇求助',
    showProject: '顯示項目地址',
    urlPlaceholder: '請輸入 URL 地址',
    abandonUpdate: '放棄更新',
    saveAndApply: '保存並應用',
    fileMessageError: '文件大小超過 10M',
    saveSuccess: '外觀設置成功'
  },
  email: {
    title: '郵箱設置',
    smtpHost: 'SMTP Host',
    smtpHostPlaceholder: '請輸入 SMTP Host',
    smtpPort: 'SMTP Port',
    smtpPortPlaceholder: '請輸入 SMTP Port',
    smtpUser: 'SMTP 帳戶',
    smtpUserPlaceholder: '請輸入 SMTP 帳戶',
    sendEmail: '發件人信箱',
    sendEmailPlaceholder: '請輸入發件人信箱',
    smtpPassword: '密碼',
    smtpPasswordPlaceholder: '請輸入發件人密碼',
    test: '測試連接',
    enableSSL: '啟用 SSL（如果 SMTP 端口是 465，通常需要啟用 SSL）',
    enableTLS: '啟用 TLS（如果 SMTP 端口是 587，通常需要啟用 TLS）',
    testSuccess: '測試連接成功'
  }
}
