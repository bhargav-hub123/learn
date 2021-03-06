/* eslint-disable spaced-comment */
(function() {
    var confiantGlobal = window.confiant || (window.confiant = {});
    var clientSettings = (window.confiant && window.confiant['t_Qv_vWzcBDsyn934F1E0MWBb1c'] && window.confiant['t_Qv_vWzcBDsyn934F1E0MWBb1c'].clientSettings) ||
        window.confiant;

    var integrationSetting = {
        config_ver: '202206130753',
        integration_type: 'prebid',
        exec_test_ver: null,
        exec_ver: confiantGlobal['prebid_integration_version'] || '202206091722'
    };

    function defaultCallback() {
        console.log('Confiant: ad blocked');
    };
    var settings = {
        propertyId: 't_Qv_vWzcBDsyn934F1E0MWBb1c',
        adServer: 'https://protected-by.clarium.io',
        confiantCdn: 'confiant-integrations.global.ssl.fastly.net',
        mapping: 'W3siaSI6MiwidCI6Int7b319Ont7d319eHt7aH19IiwicCI6MCwiRCI6MSwiciI6W119LHsiaSI6NiwidCI6Int7Y299fTp7e3d9fXh7e2h9fSIsInAiOjUwLCJEIjowLCJyIjpbeyJ0IjoiZXgiLCJzIjpudWxsLCJ2IjoiY28ifV19XQ==',
        activation: '',
        cdt_version: '202206091722',
        rules: {
            "du": 0,
            "rs": 1,
            "v": 6,
            "vp": [],
            "vlp": [],
            "m": [{
                "r": [{
                    "d": "tpc.googlesyndication.com",
                    "l": [{
                        "oi": "rirhd4",
                        "ot": 2,
                        "rs": 1,
                        "s": ["/4219073793260234323"]
                    }, {
                        "oi": "aymog4",
                        "ot": 2,
                        "rs": 1,
                        "s": ["/10989203281123427387"]
                    }, {
                        "oi": "klm2a3",
                        "ot": 2,
                        "rs": 1,
                        "s": ["/865579703871986013"]
                    }, {
                        "oi": "hnr0b3",
                        "ot": 2,
                        "rs": 1,
                        "s": ["/12880107220053991766"]
                    }]
                }, {
                    "d": "simpli.fi",
                    "l": [{
                        "oi": "e3cls4",
                        "ot": 2,
                        "rs": 1,
                        "s": ["/ads/2685149/23741716"]
                    }]
                }, {
                    "d": "trp-display-creative",
                    "l": [{
                        "oi": "gznqs4",
                        "ot": 2,
                        "rs": 1,
                        "s": ["aqid=\"2132:23741716"]
                    }, {
                        "oi": "33ig95",
                        "ot": 2,
                        "rs": 0,
                        "s": ["aqid=\"5550:1517885925477261109"]
                    }, {
                        "oi": "twaes3",
                        "ot": 2,
                        "rs": 1,
                        "s": ["aqid=\"3778:4117783085"]
                    }, {
                        "oi": "ey2v55",
                        "ot": 2,
                        "rs": 1,
                        "s": ["aqid=\"3778:4118159144"]
                    }, {
                        "oi": "xa3v55",
                        "ot": 2,
                        "rs": 1,
                        "s": ["aqid=\"3778:4118159100"]
                    }, {
                        "oi": "hkjv55",
                        "ot": 2,
                        "rs": 1,
                        "s": ["aqid=\"3778:4118159106"]
                    }, {
                        "oi": "622x55",
                        "ot": 2,
                        "rs": 1,
                        "s": ["aqid=\"3778:4118159081"]
                    }, {
                        "oi": "b82x55",
                        "ot": 2,
                        "rs": 1,
                        "s": ["aqid=\"3778:4118159087"]
                    }]
                }, {
                    "d": "adform.net",
                    "l": [{
                        "oi": "z4v3f3",
                        "ot": 2,
                        "rs": 1,
                        "s": ["?bn=36499156"]
                    }, {
                        "oi": "ehrwo3",
                        "ot": 2,
                        "rs": 1,
                        "s": ["?bn=37570604"]
                    }, {
                        "oi": "xynpu3",
                        "ot": 2,
                        "rs": 1,
                        "s": ["?bn=39117662"]
                    }, {
                        "oi": "9r6uu3",
                        "ot": 2,
                        "rs": 1,
                        "s": ["?bn=39153365"]
                    }, {
                        "oi": "br6uu3",
                        "ot": 2,
                        "rs": 1,
                        "s": ["?bn=39153367"]
                    }, {
                        "oi": "pwyyx3",
                        "ot": 2,
                        "rs": 1,
                        "s": ["?bn=40631725"]
                    }, {
                        "oi": "sxyyx3",
                        "ot": 2,
                        "rs": 1,
                        "s": ["?bn=40631729"]
                    }, {
                        "oi": "8xky24",
                        "ot": 2,
                        "rs": 1,
                        "s": ["?bn=42684737"]
                    }, {
                        "oi": "ifly24",
                        "ot": 2,
                        "rs": 1,
                        "s": ["?bn=42684733"]
                    }, {
                        "oi": "mfly24",
                        "ot": 2,
                        "rs": 1,
                        "s": ["?bn=42684739"]
                    }, {
                        "oi": "88n764",
                        "ot": 2,
                        "rs": 1,
                        "s": ["?bn=43756543"]
                    }, {
                        "oi": "s8n764",
                        "ot": 2,
                        "rs": 1,
                        "s": ["?bn=43756549"]
                    }, {
                        "oi": "0an764",
                        "ot": 2,
                        "rs": 1,
                        "s": ["?bn=43756551"]
                    }, {
                        "oi": "t3l2b4",
                        "ot": 2,
                        "rs": 1,
                        "s": ["?bn=41277633"]
                    }, {
                        "oi": "qql2b4",
                        "ot": 2,
                        "rs": 1,
                        "s": ["?bn=41277628"]
                    }, {
                        "oi": "k1q2b4",
                        "ot": 2,
                        "rs": 1,
                        "s": ["?bn=41277630"]
                    }, {
                        "oi": "xzmjb4",
                        "ot": 2,
                        "rs": 1,
                        "s": ["?bn=45420391"]
                    }, {
                        "oi": "00njb4",
                        "ot": 2,
                        "rs": 1,
                        "s": ["?bn=45420393"]
                    }, {
                        "oi": "g0njb4",
                        "ot": 2,
                        "rs": 1,
                        "s": ["?bn=45420398"]
                    }, {
                        "oi": "r0njb4",
                        "ot": 2,
                        "rs": 1,
                        "s": ["?bn=45420406"]
                    }, {
                        "oi": "nt5sb4",
                        "ot": 2,
                        "rs": 1,
                        "s": ["?bn=45397441"]
                    }, {
                        "oi": "a6gsb4",
                        "ot": 2,
                        "rs": 1,
                        "s": ["?bn=45397438"]
                    }, {
                        "oi": "h78xb4",
                        "ot": 2,
                        "rs": 1,
                        "s": ["?bn=45397455"]
                    }, {
                        "oi": "i73gc4",
                        "ot": 2,
                        "rs": 1,
                        "s": ["?bn=45717299"]
                    }, {
                        "oi": "c2z0d4",
                        "ot": 2,
                        "rs": 1,
                        "s": ["?bn=45397450"]
                    }, {
                        "oi": "rue3e4",
                        "ot": 2,
                        "rs": 1,
                        "s": ["?bn=46269953"]
                    }, {
                        "oi": "wue3e4",
                        "ot": 2,
                        "rs": 1,
                        "s": ["?bn=46269951"]
                    }, {
                        "oi": "932jf4",
                        "ot": 2,
                        "rs": 1,
                        "s": ["?bn=46893174"]
                    }, {
                        "oi": "f32jf4",
                        "ot": 2,
                        "rs": 1,
                        "s": ["?bn=46893196"]
                    }, {
                        "oi": "p32jf4",
                        "ot": 2,
                        "rs": 1,
                        "s": ["?bn=46893198"]
                    }, {
                        "oi": "2yxok4",
                        "ot": 2,
                        "rs": 1,
                        "s": ["?bn=48929917"]
                    }, {
                        "oi": "b92fl4",
                        "ot": 2,
                        "rs": 1,
                        "s": ["?bn=48349228"]
                    }, {
                        "oi": "voalm4",
                        "ot": 2,
                        "rs": 1,
                        "s": ["?bn=49572274"]
                    }, {
                        "oi": "1ralm4",
                        "ot": 2,
                        "rs": 1,
                        "s": ["?bn=49572276"]
                    }, {
                        "oi": "iralm4",
                        "ot": 2,
                        "rs": 1,
                        "s": ["?bn=49572291"]
                    }, {
                        "oi": "ekqir4",
                        "ot": 2,
                        "rs": 1,
                        "s": ["?bn=51312070"]
                    }, {
                        "oi": "zkqir4",
                        "ot": 2,
                        "rs": 1,
                        "s": ["?bn=51312072"]
                    }, {
                        "oi": "14rir4",
                        "ot": 2,
                        "rs": 1,
                        "s": ["?bn=51312079"]
                    }, {
                        "oi": "bxior4",
                        "ot": 2,
                        "rs": 1,
                        "s": ["?bn=51312080"]
                    }, {
                        "oi": "8fqsr4",
                        "ot": 2,
                        "rs": 1,
                        "s": ["?bn=51469292"]
                    }, {
                        "oi": "i31ns4",
                        "ot": 2,
                        "rs": 1,
                        "s": ["?bn=51750728"]
                    }, {
                        "oi": "241ns4",
                        "ot": 2,
                        "rs": 1,
                        "s": ["?bn=51750725"]
                    }, {
                        "oi": "551ns4",
                        "ot": 2,
                        "rs": 1,
                        "s": ["?bn=51750730"]
                    }, {
                        "oi": "751ns4",
                        "ot": 2,
                        "rs": 1,
                        "s": ["?bn=51750720"]
                    }, {
                        "oi": "b61ns4",
                        "ot": 2,
                        "rs": 1,
                        "s": ["?bn=51750714"]
                    }, {
                        "oi": "x61ns4",
                        "ot": 2,
                        "rs": 1,
                        "s": ["?bn=51750731"]
                    }, {
                        "oi": "b71ns4",
                        "ot": 2,
                        "rs": 1,
                        "s": ["?bn=51750715"]
                    }, {
                        "oi": "vaxps4",
                        "ot": 2,
                        "rs": 1,
                        "s": ["?bn=51781332"]
                    }, {
                        "oi": "xaxps4",
                        "ot": 2,
                        "rs": 1,
                        "s": ["?bn=51781322"]
                    }, {
                        "oi": "xbxps4",
                        "ot": 2,
                        "rs": 1,
                        "s": ["?bn=51781327"]
                    }, {
                        "oi": "o26qs4",
                        "ot": 2,
                        "rs": 1,
                        "s": ["?bn=51787612"]
                    }, {
                        "oi": "j36qs4",
                        "ot": 2,
                        "rs": 1,
                        "s": ["?bn=51787611"]
                    }, {
                        "oi": "s46qs4",
                        "ot": 2,
                        "rs": 1,
                        "s": ["?bn=51787614"]
                    }, {
                        "oi": "78lot4",
                        "ot": 2,
                        "rs": 1,
                        "s": ["?bn=52110467"]
                    }, {
                        "oi": "qu0lw4",
                        "ot": 2,
                        "rs": 1,
                        "s": ["?bn=51787640"]
                    }, {
                        "oi": "7r29y4",
                        "ot": 2,
                        "rs": 1,
                        "s": ["?bn=53517973"]
                    }, {
                        "oi": "8r29y4",
                        "ot": 2,
                        "rs": 1,
                        "s": ["?bn=53517974"]
                    }, {
                        "oi": "f421z4",
                        "ot": 2,
                        "rs": 1,
                        "s": ["?bn=53754702"]
                    }, {
                        "oi": "3521z4",
                        "ot": 2,
                        "rs": 1,
                        "s": ["?bn=53754701"]
                    }, {
                        "oi": "d521z4",
                        "ot": 2,
                        "rs": 1,
                        "s": ["?bn=53754703"]
                    }, {
                        "oi": "5i9605",
                        "ot": 2,
                        "rs": 1,
                        "s": ["?bn=54101392"]
                    }, {
                        "oi": "9i9605",
                        "ot": 2,
                        "rs": 1,
                        "s": ["?bn=54101395"]
                    }, {
                        "oi": "ci9605",
                        "ot": 2,
                        "rs": 1,
                        "s": ["?bn=54101396"]
                    }, {
                        "oi": "4j9605",
                        "ot": 2,
                        "rs": 1,
                        "s": ["?bn=54101400"]
                    }, {
                        "oi": "06b605",
                        "ot": 2,
                        "rs": 1,
                        "s": ["?bn=54102168"]
                    }, {
                        "oi": "86b605",
                        "ot": 2,
                        "rs": 1,
                        "s": ["?bn=54102171"]
                    }, {
                        "oi": "057c05",
                        "ot": 2,
                        "rs": 1,
                        "s": ["?bn=51787617"]
                    }, {
                        "oi": "rg3o05",
                        "ot": 2,
                        "rs": 1,
                        "s": ["?bn=54103235"]
                    }, {
                        "oi": "vj6s05",
                        "ot": 2,
                        "rs": 1,
                        "s": ["?bn=54099895"]
                    }, {
                        "oi": "xj6s05",
                        "ot": 2,
                        "rs": 1,
                        "s": ["?bn=54099887"]
                    }, {
                        "oi": "qk6s05",
                        "ot": 2,
                        "rs": 1,
                        "s": ["?bn=54099893"]
                    }, {
                        "oi": "yk6s05",
                        "ot": 2,
                        "rs": 1,
                        "s": ["?bn=54099885"]
                    }, {
                        "oi": "kl6s05",
                        "ot": 2,
                        "rs": 1,
                        "s": ["?bn=54099890"]
                    }, {
                        "oi": "ll6s05",
                        "ot": 2,
                        "rs": 1,
                        "s": ["?bn=54099881"]
                    }, {
                        "oi": "hm6s05",
                        "ot": 2,
                        "rs": 1,
                        "s": ["?bn=54099882"]
                    }, {
                        "oi": "kz6s05",
                        "ot": 2,
                        "rs": 1,
                        "s": ["?bn=54099894"]
                    }, {
                        "oi": "l73015",
                        "ot": 2,
                        "rs": 1,
                        "s": ["?bn=54344080"]
                    }, {
                        "oi": "t6m015",
                        "ot": 2,
                        "rs": 1,
                        "s": ["?bn=54347668"]
                    }, {
                        "oi": "e43615",
                        "ot": 2,
                        "rs": 1,
                        "s": ["?bn=54298976"]
                    }, {
                        "oi": "e6r615",
                        "ot": 2,
                        "rs": 1,
                        "s": ["?bn=54432863"]
                    }, {
                        "oi": "6v7i15",
                        "ot": 2,
                        "rs": 1,
                        "s": ["?bn=54520782"]
                    }, {
                        "oi": "z5fu15",
                        "ot": 2,
                        "rs": 1,
                        "s": ["?bn=54594828"]
                    }, {
                        "oi": "q5gk25",
                        "ot": 2,
                        "rs": 1,
                        "s": ["?bn=54691887"]
                    }, {
                        "oi": "y5gk25",
                        "ot": 2,
                        "rs": 1,
                        "s": ["?bn=54691889"]
                    }, {
                        "oi": "57gk25",
                        "ot": 2,
                        "rs": 1,
                        "s": ["?bn=54691907"]
                    }, {
                        "oi": "48gk25",
                        "ot": 2,
                        "rs": 1,
                        "s": ["?bn=54691916"]
                    }, {
                        "oi": "99gk25",
                        "ot": 2,
                        "rs": 1,
                        "s": ["?bn=54691905"]
                    }, {
                        "oi": "odtk25",
                        "ot": 2,
                        "rs": 1,
                        "s": ["?bn=54697144"]
                    }, {
                        "oi": "8azm25",
                        "ot": 2,
                        "rs": 1,
                        "s": ["?bn=54689924"]
                    }, {
                        "oi": "ub8w25",
                        "ot": 2,
                        "rs": 1,
                        "s": ["?bn=54759114"]
                    }, {
                        "oi": "zb8w25",
                        "ot": 2,
                        "rs": 1,
                        "s": ["?bn=54759116"]
                    }, {
                        "oi": "jsmq35",
                        "ot": 2,
                        "rs": 1,
                        "s": ["?bn=54873625"]
                    }, {
                        "oi": "y67145",
                        "ot": 2,
                        "rs": 1,
                        "s": ["?bn=54874141"]
                    }, {
                        "oi": "a74y45",
                        "ot": 2,
                        "rs": 1,
                        "s": ["?bn=55148446"]
                    }, {
                        "oi": "zt4y45",
                        "ot": 2,
                        "rs": 1,
                        "s": ["?bn=55148437"]
                    }, {
                        "oi": "8l5y45",
                        "ot": 2,
                        "rs": 1,
                        "s": ["?bn=55148954"]
                    }, {
                        "oi": "lv5y45",
                        "ot": 2,
                        "rs": 1,
                        "s": ["?bn=55148952"]
                    }, {
                        "oi": "gemy45",
                        "ot": 2,
                        "rs": 1,
                        "s": ["?bn=55155615"]
                    }, {
                        "oi": "nemy45",
                        "ot": 2,
                        "rs": 1,
                        "s": ["?bn=55155609"]
                    }, {
                        "oi": "wmmy45",
                        "ot": 2,
                        "rs": 1,
                        "s": ["?bn=55155614"]
                    }, {
                        "oi": "qagb55",
                        "ot": 2,
                        "rs": 1,
                        "s": ["?bn=51787629"]
                    }, {
                        "oi": "kats55",
                        "ot": 2,
                        "rs": 1,
                        "s": ["?bn=55286244"]
                    }, {
                        "oi": "eets55",
                        "ot": 2,
                        "rs": 1,
                        "s": ["?bn=55286291"]
                    }, {
                        "oi": "fets55",
                        "ot": 2,
                        "rs": 1,
                        "s": ["?bn=55286287"]
                    }, {
                        "oi": "djmb65",
                        "ot": 2,
                        "rs": 1,
                        "s": ["?bn=55298156"]
                    }, {
                        "oi": "j4wb65",
                        "ot": 2,
                        "rs": 1,
                        "s": ["?bn=55379376"]
                    }, {
                        "oi": "46fg65",
                        "ot": 2,
                        "rs": 1,
                        "s": ["?bn=55399308"]
                    }, {
                        "oi": "rofg65",
                        "ot": 2,
                        "rs": 1,
                        "s": ["?bn=55399300"]
                    }, {
                        "oi": "ajvt65",
                        "ot": 2,
                        "rs": 1,
                        "s": ["?bn=55450115"]
                    }, {
                        "oi": "m5mz65",
                        "ot": 2,
                        "rs": 1,
                        "s": ["?bn=55475675"]
                    }, {
                        "oi": "h7mz65",
                        "ot": 2,
                        "rs": 1,
                        "s": ["?bn=55475679"]
                    }, {
                        "oi": "k7mz65",
                        "ot": 2,
                        "rs": 1,
                        "s": ["?bn=55475682"]
                    }, {
                        "oi": "l7mz65",
                        "ot": 2,
                        "rs": 1,
                        "s": ["?bn=55475680"]
                    }, {
                        "oi": "famz65",
                        "ot": 2,
                        "rs": 1,
                        "s": ["?bn=55475688"]
                    }, {
                        "oi": "mcmz65",
                        "ot": 2,
                        "rs": 1,
                        "s": ["?bn=55475692"]
                    }, {
                        "oi": "ncmz65",
                        "ot": 2,
                        "rs": 1,
                        "s": ["?bn=55475689"]
                    }, {
                        "oi": "27a475",
                        "ot": 2,
                        "rs": 1,
                        "s": ["?bn=55501333"]
                    }, {
                        "oi": "4ca475",
                        "ot": 2,
                        "rs": 1,
                        "s": ["?bn=55501346"]
                    }, {
                        "oi": "iicc75",
                        "ot": 2,
                        "rs": 1,
                        "s": ["?bn=55555880"]
                    }, {
                        "oi": "5mcc75",
                        "ot": 2,
                        "rs": 1,
                        "s": ["?bn=55555879"]
                    }, {
                        "oi": "4ncc75",
                        "ot": 2,
                        "rs": 1,
                        "s": ["?bn=55555882"]
                    }, {
                        "oi": "1occ75",
                        "ot": 2,
                        "rs": 1,
                        "s": ["?bn=55555881"]
                    }, {
                        "oi": "j5lc75",
                        "ot": 2,
                        "rs": 1,
                        "s": ["?bn=55557753"]
                    }, {
                        "oi": "i7lc75",
                        "ot": 2,
                        "rs": 1,
                        "s": ["?bn=55557755"]
                    }, {
                        "oi": "p7lc75",
                        "ot": 2,
                        "rs": 1,
                        "s": ["?bn=55557757"]
                    }, {
                        "oi": "v7lc75",
                        "ot": 2,
                        "rs": 1,
                        "s": ["?bn=55557754"]
                    }, {
                        "oi": "x7lc75",
                        "ot": 2,
                        "rs": 1,
                        "s": ["?bn=55557756"]
                    }, {
                        "oi": "gpru75",
                        "ot": 2,
                        "rs": 1,
                        "s": ["?bn=55610066"]
                    }, {
                        "oi": "upru75",
                        "ot": 2,
                        "rs": 1,
                        "s": ["?bn=55610065"]
                    }, {
                        "oi": "27ky75",
                        "ot": 2,
                        "rs": 1,
                        "s": ["?bn=55658441"]
                    }, {
                        "oi": "37ky75",
                        "ot": 2,
                        "rs": 1,
                        "s": ["?bn=55658445"]
                    }, {
                        "oi": "l7ky75",
                        "ot": 2,
                        "rs": 1,
                        "s": ["?bn=55658444"]
                    }, {
                        "oi": "q9ky75",
                        "ot": 2,
                        "rs": 1,
                        "s": ["?bn=55658442"]
                    }, {
                        "oi": "iaky75",
                        "ot": 2,
                        "rs": 1,
                        "s": ["?bn=55658443"]
                    }, {
                        "oi": "5rx885",
                        "ot": 2,
                        "rs": 1,
                        "s": ["?bn=55725184"]
                    }, {
                        "oi": "rd9g95",
                        "ot": 2,
                        "rs": 1,
                        "s": ["?bn=55937626"]
                    }, {
                        "oi": "rh9g95",
                        "ot": 2,
                        "rs": 1,
                        "s": ["?bn=55937629"]
                    }, {
                        "oi": "9k9g95",
                        "ot": 2,
                        "rs": 1,
                        "s": ["?bn=55937630"]
                    }]
                }, {
                    "d": "creatives.smadex.com",
                    "l": [{
                        "oi": "jf90g4",
                        "ot": 2,
                        "rs": 1,
                        "s": ["/cr/1484610/s/217424"]
                    }, {
                        "oi": "wv90g4",
                        "ot": 2,
                        "rs": 1,
                        "s": ["/cr/1484620/s/217424"]
                    }, {
                        "oi": "0dwhy4",
                        "ot": 2,
                        "rs": 1,
                        "s": ["/cr/1915973/s/217424"]
                    }, {
                        "oi": "xm5fz4",
                        "ot": 2,
                        "rs": 1,
                        "s": ["/cr/1938717/s/217424"]
                    }, {
                        "oi": "493015",
                        "ot": 2,
                        "rs": 1,
                        "s": ["/cr/1970779/s/217424"]
                    }, {
                        "oi": "60up45",
                        "ot": 2,
                        "rs": 1,
                        "s": ["/cr/2035437/s/207381"]
                    }, {
                        "oi": "xdv955",
                        "ot": 2,
                        "rs": 1,
                        "s": ["/cr/2047193/s/217424"]
                    }, {
                        "oi": "sqv955",
                        "ot": 2,
                        "rs": 1,
                        "s": ["/cr/2047041/s/217424"]
                    }]
                }, {
                    "d": "turn.com",
                    "l": [{
                        "oi": "pvsgw4",
                        "ot": 2,
                        "rs": 1,
                        "s": ["aid=52313689"]
                    }, {
                        "oi": "l0vgw4",
                        "ot": 2,
                        "rs": 1,
                        "s": ["aid=52313779"]
                    }, {
                        "oi": "hhpgz4",
                        "ot": 2,
                        "rs": 1,
                        "s": ["aid=52313781"]
                    }]
                }, {
                    "d": "a.rfihub.com",
                    "l": [{
                        "oi": "ovunw4",
                        "ot": 2,
                        "rs": 1,
                        "s": ["&ai=4950394"]
                    }, {
                        "oi": "iwunw4",
                        "ot": 2,
                        "rs": 1,
                        "s": ["&ai=4950392"]
                    }, {
                        "oi": "mwunw4",
                        "ot": 2,
                        "rs": 1,
                        "s": ["&ai=4950398"]
                    }, {
                        "oi": "jxunw4",
                        "ot": 2,
                        "rs": 1,
                        "s": ["&ai=4950390"]
                    }, {
                        "oi": "m5lyz4",
                        "ot": 2,
                        "rs": 1,
                        "s": ["&ai=4977474"]
                    }, {
                        "oi": "56lyz4",
                        "ot": 2,
                        "rs": 1,
                        "s": ["&ai=4977470"]
                    }, {
                        "oi": "oao105",
                        "ot": 2,
                        "rs": 1,
                        "s": ["&ai=4978552"]
                    }, {
                        "oi": "4qo105",
                        "ot": 2,
                        "rs": 1,
                        "s": ["&ai=4978554"]
                    }, {
                        "oi": "pltd95",
                        "ot": 2,
                        "rs": 1,
                        "s": ["&ai=5030851"]
                    }, {
                        "oi": "d0vd95",
                        "ot": 2,
                        "rs": 1,
                        "s": ["&ai=5030835"]
                    }, {
                        "oi": "tqyd95",
                        "ot": 2,
                        "rs": 1,
                        "s": ["&ai=5030855"]
                    }]
                }, {
                    "d": "SSP BannerAd DspId",
                    "l": [{
                        "oi": "ey2v55",
                        "ot": 2,
                        "rs": 1,
                        "s": ["CrsCrId:5fc8118981918eae15f1d7776e36267303b324ed"]
                    }, {
                        "oi": "xa3v55",
                        "ot": 2,
                        "rs": 1,
                        "s": ["CrsCrId:42ca4ab692cb740780fae56bf375e4fc81509caf"]
                    }, {
                        "oi": "hkjv55",
                        "ot": 2,
                        "rs": 1,
                        "s": ["CrsCrId:5dca4419bf845f7060c127d3705534b165fdae81"]
                    }, {
                        "oi": "622x55",
                        "ot": 2,
                        "rs": 1,
                        "s": ["CrsCrId:2a17ecfe53a3cbc2fbb40d07dfc1d56b1ce7095f"]
                    }, {
                        "oi": "b82x55",
                        "ot": 2,
                        "rs": 1,
                        "s": ["CrsCrId:55c82c1f40e870111c5e13abd28eeb68339d17f1"]
                    }, {
                        "oi": "bibp65",
                        "ot": 2,
                        "rs": 1,
                        "s": ["CrsCrId:61541efa6a65da3f91dcec8a818783a14de16057"]
                    }]
                }, {
                    "d": "bs.serving-sys.com",
                    "l": [{
                        "oi": "sjno85",
                        "ot": 2,
                        "rs": 1,
                        "s": ["pli=1078050069"]
                    }]
                }, {
                    "d": "cpi-offers.com",
                    "l": [{
                        "oi": "am7",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "videowalldirect.com",
                    "l": [{
                        "oi": "o4a",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "invitereferrals.com",
                    "l": [{
                        "oi": "pba",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "houseofpubs.com",
                    "l": [{
                        "oi": "dcb",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "revlift.io",
                    "l": [{
                        "oi": "1db",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "rtbadzesto.com",
                    "l": [{
                        "oi": "5ib",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "tknpm.com",
                    "l": [{
                        "oi": "vlb",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "adcannyads.com",
                    "l": [{
                        "oi": "0rb",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "aceex.io",
                    "l": [{
                        "oi": "ssb",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "doloncor.com",
                    "l": [{
                        "oi": "hvb",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "boffoadsapi.com",
                    "l": [{
                        "oi": "pxb",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "adokutrtb.com",
                    "l": [{
                        "oi": "eyb",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "printrecipes.net",
                    "l": [{
                        "oi": "azb",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "searchandprint.recipes",
                    "l": [{
                        "oi": "bzb",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "funnylbs.com",
                    "l": [{
                        "oi": "i4c",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "appadsnetwork.com",
                    "l": [{
                        "oi": "b5c",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "superappmobile.com",
                    "l": [{
                        "oi": "tbc",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "fadb.xyz",
                    "l": [{
                        "oi": "7cc",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "ledbox.es",
                    "l": [{
                        "oi": "rcc",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "riceio.com",
                    "l": [{
                        "oi": "scc",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "time2padel.com",
                    "l": [{
                        "oi": "2dc",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "adapace.com",
                    "l": [{
                        "oi": "cdc",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "propeller-tracking.com",
                    "l": [{
                        "oi": "mfc",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "justbidit.xyz",
                    "l": [{
                        "oi": "vkc",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "trkad.network",
                    "l": [{
                        "oi": "xoc",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "capital-grn.com",
                    "l": [{
                        "oi": "9dd",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "adsgard.net",
                    "l": [{
                        "oi": "xnd",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "trkmyclk.xyz",
                    "l": [{
                        "oi": "drd",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "quicklivenews.com",
                    "l": [{
                        "oi": "9pe",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "downloadeasy-unlimited.com",
                    "l": [{
                        "oi": "pcf",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "movieseries-unlimited.com",
                    "l": [{
                        "oi": "j1g",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "coladder.com",
                    "l": [{
                        "oi": "a2g",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "xo.engine.adglare.net",
                    "l": [{
                        "oi": "4kg",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "cottagal.com",
                    "l": [{
                        "oi": "8xg",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "mvsrtb.com",
                    "l": [{
                        "oi": "iyg",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "kraftshala.com",
                    "l": [{
                        "oi": "6jh",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "rtbrain.app",
                    "l": [{
                        "oi": "rqh",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "freetestnow.app",
                    "l": [{
                        "oi": "8uh",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "lonnemanplumbingnky.com",
                    "l": [{
                        "oi": "b9i",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "algbid.app",
                    "l": [{
                        "oi": "xdi",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "spread-cdn43.com",
                    "l": [{
                        "oi": "eli",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "rishihood.edu.in",
                    "l": [{
                        "oi": "cpi",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "dontkinhooot.tw",
                    "l": [{
                        "oi": "1yi",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "aj2295.online",
                    "l": [{
                        "oi": "syi",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "kinesis-rtb.com",
                    "l": [{
                        "oi": "z1j",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "spread-metrics44.com",
                    "l": [{
                        "oi": "g2j",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "em-is.org",
                    "l": [{
                        "oi": "4ej",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "stack-farm40.com",
                    "l": [{
                        "oi": "fnj",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "idilimamoglu.com",
                    "l": [{
                        "oi": "ksj",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "breakingcelebrity.com",
                    "l": [{
                        "oi": "9uj",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "fruttasana.com",
                    "l": [{
                        "oi": "xgk",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "pcsystemfix.com",
                    "l": [{
                        "oi": "a2l",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "smaart.house",
                    "l": [{
                        "oi": "csl",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "amz-investment-pros.club",
                    "l": [{
                        "oi": "85m",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "kpacarpet.com",
                    "l": [{
                        "oi": "4gm",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "oldbillspestcontrol.com",
                    "l": [{
                        "oi": "5zm",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "dicial-weingtone.icu",
                    "l": [{
                        "oi": "4cn",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "allin1-digitalcontent.net",
                    "l": [{
                        "oi": "07o",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "d1wo3edaczbhpv.cloudfront.net",
                    "l": [{
                        "oi": "h8o",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "clearancewarehouse.irish",
                    "l": [{
                        "oi": "sho",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "handbidet.irish",
                    "l": [{
                        "oi": "uho",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "concretemould.irish",
                    "l": [{
                        "oi": "yho",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "nesycapital.com",
                    "l": [{
                        "oi": "42p",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "liquidagents.com",
                    "l": [{
                        "oi": "j5p",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "lawnlevelrake.com",
                    "l": [{
                        "oi": "r9p",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "topinvestadvisor.com",
                    "l": [{
                        "oi": "hcp",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "investments4all.club",
                    "l": [{
                        "oi": "udp",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "mariadragan.ro",
                    "l": [{
                        "oi": "oip",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "lygfzf.com",
                    "l": [{
                        "oi": "pip",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "tradelg.net",
                    "l": [{
                        "oi": "3jp",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "eowyq.adsb4trk.com",
                    "l": [{
                        "oi": "8jp",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "zolbermedia.com",
                    "l": [{
                        "oi": "ukp",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "myadtracker.co",
                    "l": [{
                        "oi": "hmp",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "trade-and-earn.com",
                    "l": [{
                        "oi": "yqp",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "evest.com",
                    "l": [{
                        "oi": "0rp",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "cmtrading.com",
                    "l": [{
                        "oi": "1rp",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "jomallex.com",
                    "l": [{
                        "oi": "svp",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "autohempel.de",
                    "l": [{
                        "oi": "oyp",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "berincon.com",
                    "l": [{
                        "oi": "g5q",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "servoror.com",
                    "l": [{
                        "oi": "j6q",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "news-cdn.site",
                    "l": [{
                        "oi": "28q",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "theparcelco.com",
                    "l": [{
                        "oi": "u9q",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "ozelenenie.gb.net",
                    "l": [{
                        "oi": "ceq",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "analyticsdiagnostic.com",
                    "l": [{
                        "oi": "hjq",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "springair.co.id",
                    "l": [{
                        "oi": "llq",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "news-img.tech",
                    "l": [{
                        "oi": "1rq",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "pdfhubonline.com",
                    "l": [{
                        "oi": "csq",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "sweepstakesalerts.com",
                    "l": [{
                        "oi": "dsq",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "allin1digitalcontent.com",
                    "l": [{
                        "oi": "esq",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "watchnewsnow.org",
                    "l": [{
                        "oi": "atq",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "winningmediallc.com",
                    "l": [{
                        "oi": "4uq",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "ampupproducts.com",
                    "l": [{
                        "oi": "jwq",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "bluepixelfactory.com",
                    "l": [{
                        "oi": "ywq",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "bystryyeinvestitsii.com",
                    "l": [{
                        "oi": "cyq",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "bidderopt.com",
                    "l": [{
                        "oi": "93r",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "mobileads.digital",
                    "l": [{
                        "oi": "g4r",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "dermatips.eu",
                    "l": [{
                        "oi": "o6r",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "costumers-kings.com",
                    "l": [{
                        "oi": "97r",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "all-in1-digitalcontent.net",
                    "l": [{
                        "oi": "a7r",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "gurahpro.com",
                    "l": [{
                        "oi": "ffr",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "thebigadsstore.com",
                    "l": [{
                        "oi": "rir",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "speakeren.com",
                    "l": [{
                        "oi": "skr",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "mia56.com",
                    "l": [{
                        "oi": "dpr",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "lerevecraze.com",
                    "l": [{
                        "oi": "ypr",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "ekkla.ch",
                    "l": [{
                        "oi": "zpr",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "roxxtraxx.de",
                    "l": [{
                        "oi": "wwr",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "liquidityx.com",
                    "l": [{
                        "oi": "czr",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "listenfun.com",
                    "l": [{
                        "oi": "h8s",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "pcalm.co.kr",
                    "l": [{
                        "oi": "7ks",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "handbidet.co.nz",
                    "l": [{
                        "oi": "4ns",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "investoralia.com",
                    "l": [{
                        "oi": "6ss",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "adservertq.com",
                    "l": [{
                        "oi": "jus",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "24mercados-financieros.com",
                    "l": [{
                        "oi": "8bt",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "wavebrowser.co",
                    "l": [{
                        "oi": "vbt",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "gowavebrowser.com",
                    "l": [{
                        "oi": "wbt",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "smartid.com.br",
                    "l": [{
                        "oi": "uft",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "ribharsh.com",
                    "l": [{
                        "oi": "wst",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "prostate-relax.pw",
                    "l": [{
                        "oi": "0xt",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "mytimesnow.com",
                    "l": [{
                        "oi": "nxt",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "filesconverteronline.app",
                    "l": [{
                        "oi": "sau",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "vicimark.com",
                    "l": [{
                        "oi": "agu",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "ad-adserver.com",
                    "l": [{
                        "oi": "ahu",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "nodesport.com",
                    "l": [{
                        "oi": "cmu",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "mobiliani.ro",
                    "l": [{
                        "oi": "uou",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "dacacio.com",
                    "l": [{
                        "oi": "xuu",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "yoursmilellc.com",
                    "l": [{
                        "oi": "w4v",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "etreetech.com",
                    "l": [{
                        "oi": "65v",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "24financialmarkets.com",
                    "l": [{
                        "oi": "xfv",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "libertex.com",
                    "l": [{
                        "oi": "jiv",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "datomax.com",
                    "l": [{
                        "oi": "mmv",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "idouku.com",
                    "l": [{
                        "oi": "smv",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "thorpsuzuki.co.za",
                    "l": [{
                        "oi": "snv",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "bluntmanufacture.fr",
                    "l": [{
                        "oi": "2rv",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "supremeadz.monster",
                    "l": [{
                        "oi": "fuv",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "coway-usa.com",
                    "l": [{
                        "oi": "gyv",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "brunno.live",
                    "l": [{
                        "oi": "x0w",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "bucks.llc",
                    "l": [{
                        "oi": "g9w",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "woobids.com",
                    "l": [{
                        "oi": "ncw",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "yardcode.com",
                    "l": [{
                        "oi": "ocw",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "origintip.com",
                    "l": [{
                        "oi": "zfw",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "rotatespace.com",
                    "l": [{
                        "oi": "2jw",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "moruv.com",
                    "l": [{
                        "oi": "ojw",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "d2dagdowof50pd.cloudfront.net",
                    "l": [{
                        "oi": "pjw",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "nolimit-digitalcontent.com",
                    "l": [{
                        "oi": "2kw",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "canvasneed.com",
                    "l": [{
                        "oi": "4nw",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "realauroradesign.com",
                    "l": [{
                        "oi": "1qw",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "yieldbetter.mobi",
                    "l": [{
                        "oi": "5rw",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "relatedllc.com",
                    "l": [{
                        "oi": "ktw",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "l4ad.info",
                    "l": [{
                        "oi": "iuw",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "kingoflikes.com",
                    "l": [{
                        "oi": "juw",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "cupidmobi.com",
                    "l": [{
                        "oi": "jww",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "proarrumado.com",
                    "l": [{
                        "oi": "pww",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "wwamex.com",
                    "l": [{
                        "oi": "qww",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "mybaseplay.com",
                    "l": [{
                        "oi": "www",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "sprigofcoffe.com",
                    "l": [{
                        "oi": "dxw",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "thirukkadaiyurkovilpooja.com",
                    "l": [{
                        "oi": "lxw",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "fbi-arsac-medoc.fr",
                    "l": [{
                        "oi": "oxw",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "greenfleetcourierservices.net",
                    "l": [{
                        "oi": "uyw",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "zukaspace.com",
                    "l": [{
                        "oi": "xyw",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "pyramidsource.com",
                    "l": [{
                        "oi": "0zw",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "pointrocks.com",
                    "l": [{
                        "oi": "6zw",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "aquapool-store.com",
                    "l": [{
                        "oi": "lzw",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "texturesmart.com",
                    "l": [{
                        "oi": "xzw",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "wahfinancial.com",
                    "l": [{
                        "oi": "zzw",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "psicologia-y-mente.com",
                    "l": [{
                        "oi": "00x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "metazoneadv.com",
                    "l": [{
                        "oi": "n0x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "lyalinks.com",
                    "l": [{
                        "oi": "v0x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "tutorinvestorpro.com",
                    "l": [{
                        "oi": "a1x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "zerkalogrimera.ru",
                    "l": [{
                        "oi": "c1x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "bitexplorer.net",
                    "l": [{
                        "oi": "e1x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "makemoneyboxes.com",
                    "l": [{
                        "oi": "k1x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "tradelg-marketing.com",
                    "l": [{
                        "oi": "m1x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "sternutator.com",
                    "l": [{
                        "oi": "s1x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "pouf-chest.ru",
                    "l": [{
                        "oi": "w1x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "orbitartb.com",
                    "l": [{
                        "oi": "e2x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "serv-ad.net",
                    "l": [{
                        "oi": "x2x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "occitation.com",
                    "l": [{
                        "oi": "63x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "navyfairfail.com",
                    "l": [{
                        "oi": "a3x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "1weather.net",
                    "l": [{
                        "oi": "d3x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "logicondr.com",
                    "l": [{
                        "oi": "k3x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "proacademyfinance.com",
                    "l": [{
                        "oi": "l3x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "beausum.com",
                    "l": [{
                        "oi": "p3x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "efteniedod.com",
                    "l": [{
                        "oi": "u3x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "byamekug.de",
                    "l": [{
                        "oi": "14x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "take-yourprizes.life",
                    "l": [{
                        "oi": "h4x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "olivixa.com",
                    "l": [{
                        "oi": "i4x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "wingzhub.com",
                    "l": [{
                        "oi": "z4x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "bizne.xyz",
                    "l": [{
                        "oi": "65x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "cashfinanceacademy.com",
                    "l": [{
                        "oi": "75x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "delltapron.com",
                    "l": [{
                        "oi": "85x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "topitrater.com",
                    "l": [{
                        "oi": "95x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "financemoneyhub.com",
                    "l": [{
                        "oi": "a5x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "financemoneystudio.com",
                    "l": [{
                        "oi": "b5x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "upcario.com",
                    "l": [{
                        "oi": "c5x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "gatefootmeet.art",
                    "l": [{
                        "oi": "e5x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "playnestmenu.com",
                    "l": [{
                        "oi": "f5x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "port-berezan.com",
                    "l": [{
                        "oi": "g5x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "etvisit.com",
                    "l": [{
                        "oi": "h5x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "digiprex.com",
                    "l": [{
                        "oi": "i5x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "finaceinvuk.xyz",
                    "l": [{
                        "oi": "o5x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "investuk.xyz",
                    "l": [{
                        "oi": "p5x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "bulzimedia.com",
                    "l": [{
                        "oi": "r5x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "filmcafemeal.com",
                    "l": [{
                        "oi": "w5x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "wildminelost.com",
                    "l": [{
                        "oi": "x5x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "bigsnakeplanet.com",
                    "l": [{
                        "oi": "26x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "bulnzok.com",
                    "l": [{
                        "oi": "36x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "veso-shop.com",
                    "l": [{
                        "oi": "46x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "theimpacthire.com",
                    "l": [{
                        "oi": "m6x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "maisongerme.gb.net",
                    "l": [{
                        "oi": "n6x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "fanfri.com",
                    "l": [{
                        "oi": "o6x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "walnutsneed.com",
                    "l": [{
                        "oi": "r6x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "amabird.com",
                    "l": [{
                        "oi": "s6x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "htguides.com",
                    "l": [{
                        "oi": "t6x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "alilagu.gb.net",
                    "l": [{
                        "oi": "u6x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "bakersa.com",
                    "l": [{
                        "oi": "v6x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "sogivip.in.net",
                    "l": [{
                        "oi": "w6x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "friedenseiche.eu",
                    "l": [{
                        "oi": "x6x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "d5umueeiwt37q.cloudfront.net",
                    "l": [{
                        "oi": "y6x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "newsinvests.com",
                    "l": [{
                        "oi": "z6x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "manulek.net",
                    "l": [{
                        "oi": "07x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "noticias-estrella.online",
                    "l": [{
                        "oi": "17x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "investernews.com",
                    "l": [{
                        "oi": "27x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "labus.ee",
                    "l": [{
                        "oi": "37x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "restraremess.com",
                    "l": [{
                        "oi": "47x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "avijiolsamsleamoa.mystrikingly.com",
                    "l": [{
                        "oi": "57x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "stocglobal.com",
                    "l": [{
                        "oi": "67x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "nordmaleren.dk",
                    "l": [{
                        "oi": "77x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "aaronwarwick.com",
                    "l": [{
                        "oi": "87x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "finlias.com",
                    "l": [{
                        "oi": "97x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "solodomehold.com",
                    "l": [{
                        "oi": "a7x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "suyolove.com",
                    "l": [{
                        "oi": "b7x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "tympanomalleal.com",
                    "l": [{
                        "oi": "c7x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "lampaticonews.com",
                    "l": [{
                        "oi": "d7x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "koynos.com",
                    "l": [{
                        "oi": "e7x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "egetaga.com",
                    "l": [{
                        "oi": "f7x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "subconcave.com",
                    "l": [{
                        "oi": "g7x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "emilyecrit.gb.net",
                    "l": [{
                        "oi": "h7x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "grandworldevents.com",
                    "l": [{
                        "oi": "i7x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "subcontiguous.com",
                    "l": [{
                        "oi": "j7x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "allcleancare.com",
                    "l": [{
                        "oi": "k7x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "ulukeri.gb.net",
                    "l": [{
                        "oi": "l7x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "hochu.ru.net",
                    "l": [{
                        "oi": "m7x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "instadd.xyz",
                    "l": [{
                        "oi": "n7x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "golmeanioletamasmi.mystrikingly.com",
                    "l": [{
                        "oi": "o7x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "walesas.com",
                    "l": [{
                        "oi": "p7x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "weedmealtick.com",
                    "l": [{
                        "oi": "q7x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "yumikabi.gb.net",
                    "l": [{
                        "oi": "r7x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "euwwoidru.gb.net",
                    "l": [{
                        "oi": "s7x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "newsinvesty.com",
                    "l": [{
                        "oi": "t7x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "articrm.com",
                    "l": [{
                        "oi": "u7x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "yachachiykunallapanchispaq.com",
                    "l": [{
                        "oi": "v7x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "wecyma.com",
                    "l": [{
                        "oi": "w7x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "servedads.media",
                    "l": [{
                        "oi": "x7x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "infestrot.com",
                    "l": [{
                        "oi": "y7x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "rolukotik.com",
                    "l": [{
                        "oi": "z7x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "fxefuhgav.gb.net",
                    "l": [{
                        "oi": "08x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "ikimidu.in.net",
                    "l": [{
                        "oi": "18x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "domesticowl.com",
                    "l": [{
                        "oi": "28x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "apartmentdesignprojects.gb.net",
                    "l": [{
                        "oi": "38x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "sorviaz.com",
                    "l": [{
                        "oi": "48x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "institutebyfinancial.com",
                    "l": [{
                        "oi": "58x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "shavkis.email",
                    "l": [{
                        "oi": "78x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "hlsireland.eu",
                    "l": [{
                        "oi": "88x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "hostpeakchip.com",
                    "l": [{
                        "oi": "98x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "clinip.com",
                    "l": [{
                        "oi": "a8x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "sonvuka.com",
                    "l": [{
                        "oi": "b8x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "videodition.com",
                    "l": [{
                        "oi": "c8x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "prickiest.com",
                    "l": [{
                        "oi": "d8x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "wildmustang.work",
                    "l": [{
                        "oi": "e8x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "oregive.gb.net",
                    "l": [{
                        "oi": "f8x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "rolukotik.net",
                    "l": [{
                        "oi": "g8x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "tossfillloan.com",
                    "l": [{
                        "oi": "h8x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "bakersjob.work",
                    "l": [{
                        "oi": "i8x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "cosmotownes.com",
                    "l": [{
                        "oi": "k8x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "peaschampion.art",
                    "l": [{
                        "oi": "l8x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "stakkei.com",
                    "l": [{
                        "oi": "m8x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "uzhoschute.net",
                    "l": [{
                        "oi": "n8x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "filmfreepile.work",
                    "l": [{
                        "oi": "o8x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "headtellwill.com",
                    "l": [{
                        "oi": "p8x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "vibiera.com",
                    "l": [{
                        "oi": "q8x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "apuduvo.es",
                    "l": [{
                        "oi": "r8x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "lemeryas.gb.net",
                    "l": [{
                        "oi": "s8x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "aashara.eu",
                    "l": [{
                        "oi": "t8x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "zwierzatko.eu",
                    "l": [{
                        "oi": "u8x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "animalmuskinfo.com",
                    "l": [{
                        "oi": "v8x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "realnost.email",
                    "l": [{
                        "oi": "w8x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "fopitrollik.com",
                    "l": [{
                        "oi": "x8x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "findiar.com",
                    "l": [{
                        "oi": "y8x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "soutienodp.gb.net",
                    "l": [{
                        "oi": "z8x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "antarcticinfo.work",
                    "l": [{
                        "oi": "09x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "cityengineer.gb.net",
                    "l": [{
                        "oi": "19x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "prulior.com",
                    "l": [{
                        "oi": "29x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "ozubobu.gb.net",
                    "l": [{
                        "oi": "39x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "conuera.com",
                    "l": [{
                        "oi": "49x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "sinicra.com",
                    "l": [{
                        "oi": "59x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "d2p2mk7hhx12mp.cloudfront.net",
                    "l": [{
                        "oi": "69x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "summerdenims.com",
                    "l": [{
                        "oi": "79x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "avwuyqdyd.gb.net",
                    "l": [{
                        "oi": "89x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "ispolzovanie.gb.net",
                    "l": [{
                        "oi": "99x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "stocusa.com",
                    "l": [{
                        "oi": "a9x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "mymues.com.au",
                    "l": [{
                        "oi": "b9x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "joshgadgetreviews.com",
                    "l": [{
                        "oi": "d9x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "rafadsa.gb.net",
                    "l": [{
                        "oi": "e9x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "clean-lifestyle-details.myshopify.com",
                    "l": [{
                        "oi": "f9x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "logozottszonyeg.hu",
                    "l": [{
                        "oi": "g9x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "szilagyimarta.hu",
                    "l": [{
                        "oi": "h9x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "xiniars.com",
                    "l": [{
                        "oi": "i9x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "mikilz.com",
                    "l": [{
                        "oi": "j9x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "fastbeautytips.com",
                    "l": [{
                        "oi": "k9x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "joparkapcsolat.hu",
                    "l": [{
                        "oi": "l9x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "interviewsoft.com",
                    "l": [{
                        "oi": "m9x",
                        "ot": 3,
                        "rs": 1
                    }]
                }, {
                    "d": "yourhealthygut.com",
                    "l": [{
                        "oi": "pmd",
                        "ot": 11,
                        "rs": 0
                    }]
                }, {
                    "d": "floraspring.com",
                    "l": [{
                        "oi": "xqd",
                        "ot": 11,
                        "rs": 0
                    }]
                }, {
                    "d": "schutzengel-orakel.com",
                    "l": [{
                        "oi": "1ud",
                        "ot": 11,
                        "rs": 0
                    }]
                }, {
                    "d": "trynanosparkle.com",
                    "l": [{
                        "oi": "uie",
                        "ot": 11,
                        "rs": 0
                    }]
                }, {
                    "d": "scontomigliore.com",
                    "l": [{
                        "oi": "nwg",
                        "ot": 11,
                        "rs": 0
                    }]
                }, {
                    "d": "getbugmd.com",
                    "l": [{
                        "oi": "o4h",
                        "ot": 11,
                        "rs": 0
                    }]
                }, {
                    "d": "q-grips.com",
                    "l": [{
                        "oi": "uih",
                        "ot": 11,
                        "rs": 0
                    }]
                }, {
                    "d": "thefinancechatter.com",
                    "l": [{
                        "oi": "qth",
                        "ot": 11,
                        "rs": 0
                    }]
                }, {
                    "d": "psychicmonday.com",
                    "l": [{
                        "oi": "yyh",
                        "ot": 11,
                        "rs": 0
                    }]
                }, {
                    "d": "authorspick.com",
                    "l": [{
                        "oi": "zyh",
                        "ot": 11,
                        "rs": 0
                    }]
                }, {
                    "d": "yoursupersweepstakes.com",
                    "l": [{
                        "oi": "z4j",
                        "ot": 11,
                        "rs": 0
                    }]
                }, {
                    "d": "antipestrepeller.com",
                    "l": [{
                        "oi": "a8j",
                        "ot": 11,
                        "rs": 0
                    }]
                }, {
                    "d": "flashrewards.co",
                    "l": [{
                        "oi": "rhj",
                        "ot": 11,
                        "rs": 0
                    }]
                }, {
                    "d": "nuubu.com",
                    "l": [{
                        "oi": "hrj",
                        "ot": 11,
                        "rs": 0
                    }]
                }, {
                    "d": "enence.com",
                    "l": [{
                        "oi": "9fl",
                        "ot": 11,
                        "rs": 0
                    }]
                }, {
                    "d": "wifipeak.com",
                    "l": [{
                        "oi": "tqm",
                        "ot": 11,
                        "rs": 0
                    }]
                }, {
                    "d": "thiswentviral.net",
                    "l": [{
                        "oi": "gvo",
                        "ot": 11,
                        "rs": 0
                    }]
                }, {
                    "d": "fit-poradnik.pl",
                    "l": [{
                        "oi": "83p",
                        "ot": 11,
                        "rs": 0
                    }]
                }, {
                    "d": "aktuellenachrichten.live",
                    "l": [{
                        "oi": "s7p",
                        "ot": 11,
                        "rs": 0
                    }]
                }, {
                    "d": "visionfemenina.me",
                    "l": [{
                        "oi": "rdp",
                        "ot": 11,
                        "rs": 0
                    }]
                }, {
                    "d": "originaldefense.com",
                    "l": [{
                        "oi": "2hp",
                        "ot": 11,
                        "rs": 0
                    }]
                }, {
                    "d": "theblueballot.com",
                    "l": [{
                        "oi": "inp",
                        "ot": 11,
                        "rs": 0
                    }]
                }, {
                    "d": "todaysdailyblessing.com",
                    "l": [{
                        "oi": "1op",
                        "ot": 11,
                        "rs": 0
                    }]
                }, {
                    "d": "socialbasecamp.com",
                    "l": [{
                        "oi": "oop",
                        "ot": 11,
                        "rs": 0
                    }]
                }, {
                    "d": "apomagazine.com",
                    "l": [{
                        "oi": "qqp",
                        "ot": 11,
                        "rs": 0
                    }]
                }, {
                    "d": "scamcatchers.com",
                    "l": [{
                        "oi": "tup",
                        "ot": 11,
                        "rs": 0
                    }]
                }, {
                    "d": "noticias-de-saude.com",
                    "l": [{
                        "oi": "k1q",
                        "ot": 11,
                        "rs": 0
                    }]
                }, {
                    "d": "gabbledash.com",
                    "l": [{
                        "oi": "d6q",
                        "ot": 11,
                        "rs": 0
                    }]
                }, {
                    "d": "news24portal.info",
                    "l": [{
                        "oi": "a7q",
                        "ot": 11,
                        "rs": 0
                    }]
                }, {
                    "d": "trendstory.us",
                    "l": [{
                        "oi": "i7q",
                        "ot": 11,
                        "rs": 0
                    }]
                }, {
                    "d": "promoherbal.net",
                    "l": [{
                        "oi": "caq",
                        "ot": 11,
                        "rs": 0
                    }]
                }, {
                    "d": "dailyseniorhealthtip.com",
                    "l": [{
                        "oi": "stq",
                        "ot": 11,
                        "rs": 0
                    }]
                }, {
                    "d": "sportingplaymakers.com",
                    "l": [{
                        "oi": "5uq",
                        "ot": 11,
                        "rs": 0
                    }]
                }, {
                    "d": "healthhabitsdaily.com",
                    "l": [{
                        "oi": "y5s",
                        "ot": 11,
                        "rs": 0
                    }]
                }, {
                    "d": "nutri-obs.com",
                    "l": [{
                        "oi": "7ls",
                        "ot": 11,
                        "rs": 0
                    }]
                }, {
                    "d": "toenaildr.com",
                    "l": [{
                        "oi": "1ys",
                        "ot": 11,
                        "rs": 0
                    }]
                }, {
                    "d": "whatstrendinghere.com",
                    "l": [{
                        "oi": "rbt",
                        "ot": 11,
                        "rs": 0
                    }]
                }, {
                    "d": "poliglu.com",
                    "l": [{
                        "oi": "frt",
                        "ot": 11,
                        "rs": 0
                    }]
                }, {
                    "d": "exipure.com",
                    "l": [{
                        "oi": "55u",
                        "ot": 11,
                        "rs": 0
                    }]
                }, {
                    "d": "theamericansweepstakes.com",
                    "l": [{
                        "oi": "e8u",
                        "ot": 11,
                        "rs": 0
                    }]
                }, {
                    "d": "just-shop.org",
                    "l": [{
                        "oi": "o8u",
                        "ot": 11,
                        "rs": 0
                    }]
                }, {
                    "d": "factoracess.com",
                    "l": [{
                        "oi": "2eu",
                        "ot": 11,
                        "rs": 0
                    }]
                }, {
                    "d": "getmosqiwatch.com",
                    "l": [{
                        "oi": "3iu",
                        "ot": 11,
                        "rs": 0
                    }]
                }, {
                    "d": "opinion-prizes.com",
                    "l": [{
                        "oi": "unu",
                        "ot": 11,
                        "rs": 0
                    }]
                }, {
                    "d": "gaming-survey.com",
                    "l": [{
                        "oi": "i8v",
                        "ot": 11,
                        "rs": 0
                    }]
                }, {
                    "d": "reward-yourself.co",
                    "l": [{
                        "oi": "79v",
                        "ot": 11,
                        "rs": 0
                    }]
                }, {
                    "d": "thedailymock.com",
                    "l": [{
                        "oi": "4bv",
                        "ot": 11,
                        "rs": 0
                    }]
                }, {
                    "d": "bibledestination.com",
                    "l": [{
                        "oi": "5bv",
                        "ot": 11,
                        "rs": 0
                    }]
                }, {
                    "d": "dailydiscountsonline.com",
                    "l": [{
                        "oi": "6bv",
                        "ot": 11,
                        "rs": 0
                    }]
                }, {
                    "d": "celebnewscenter.com",
                    "l": [{
                        "oi": "8bv",
                        "ot": 11,
                        "rs": 0
                    }]
                }, {
                    "d": "discountsdailyonline.com",
                    "l": [{
                        "oi": "9bv",
                        "ot": 11,
                        "rs": 0
                    }]
                }, {
                    "d": "dealdiscountsclub.com",
                    "l": [{
                        "oi": "abv",
                        "ot": 11,
                        "rs": 0
                    }]
                }, {
                    "d": "dailycouponscenter.com",
                    "l": [{
                        "oi": "bbv",
                        "ot": 11,
                        "rs": 0
                    }]
                }, {
                    "d": "dealsofthedaynow.com",
                    "l": [{
                        "oi": "ebv",
                        "ot": 11,
                        "rs": 0
                    }]
                }, {
                    "d": "reward-giants.com",
                    "l": [{
                        "oi": "yfv",
                        "ot": 11,
                        "rs": 0
                    }]
                }, {
                    "d": "incasollive.com",
                    "l": [{
                        "oi": "mgv",
                        "ot": 11,
                        "rs": 0
                    }]
                }, {
                    "d": "buydrcleanspray.com",
                    "l": [{
                        "oi": "vgv",
                        "ot": 11,
                        "rs": 0
                    }]
                }, {
                    "d": "shoplow.net",
                    "l": [{
                        "oi": "onv",
                        "ot": 11,
                        "rs": 0
                    }]
                }, {
                    "d": "infinite-prizes.net",
                    "l": [{
                        "oi": "rnv",
                        "ot": 11,
                        "rs": 0
                    }]
                }, {
                    "d": "newyousticky.net",
                    "l": [{
                        "oi": "hqv",
                        "ot": 11,
                        "rs": 0
                    }]
                }, {
                    "d": "dealsobsession.com",
                    "l": [{
                        "oi": "2sv",
                        "ot": 11,
                        "rs": 0
                    }]
                }, {
                    "d": "market-survey.org",
                    "l": [{
                        "oi": "wsv",
                        "ot": 11,
                        "rs": 0
                    }]
                }, {
                    "d": "prizes-vault.com",
                    "l": [{
                        "oi": "0tv",
                        "ot": 11,
                        "rs": 0
                    }]
                }, {
                    "d": "survey-win.com",
                    "l": [{
                        "oi": "xxv",
                        "ot": 11,
                        "rs": 0
                    }]
                }, {
                    "d": "sweet-reward.com",
                    "l": [{
                        "oi": "nyv",
                        "ot": 11,
                        "rs": 0
                    }]
                }, {
                    "d": "survey-award.org",
                    "l": [{
                        "oi": "52w",
                        "ot": 11,
                        "rs": 0
                    }]
                }, {
                    "d": "smart-survey-research.net",
                    "l": [{
                        "oi": "0gw",
                        "ot": 11,
                        "rs": 0
                    }]
                }, {
                    "d": "luxe-smart.watch",
                    "l": [{
                        "oi": "8iw",
                        "ot": 11,
                        "rs": 0
                    }]
                }, {
                    "d": "research-survey.co",
                    "l": [{
                        "oi": "djw",
                        "ot": 11,
                        "rs": 0
                    }]
                }, {
                    "d": "minutesurvey.org",
                    "l": [{
                        "oi": "vkw",
                        "ot": 11,
                        "rs": 0
                    }]
                }, {
                    "d": "surveyswift.org",
                    "l": [{
                        "oi": "ypw",
                        "ot": 11,
                        "rs": 0
                    }]
                }, {
                    "d": "getecoplus.com",
                    "l": [{
                        "oi": "zpw",
                        "ot": 11,
                        "rs": 0
                    }]
                }, {
                    "d": "insider-money.com",
                    "l": [{
                        "oi": "ztw",
                        "ot": 11,
                        "rs": 0
                    }]
                }, {
                    "d": "aktuelle-gutscheine.org",
                    "l": [{
                        "oi": "1uw",
                        "ot": 11,
                        "rs": 0
                    }]
                }, {
                    "d": "getvoltizer.com",
                    "l": [{
                        "oi": "buw",
                        "ot": 11,
                        "rs": 0
                    }]
                }, {
                    "d": "ultrawifiplus.com",
                    "l": [{
                        "oi": "cuw",
                        "ot": 11,
                        "rs": 0
                    }]
                }, {
                    "d": "niceprize.net",
                    "l": [{
                        "oi": "avw",
                        "ot": 11,
                        "rs": 0
                    }]
                }, {
                    "d": "exclusiveprize.org",
                    "l": [{
                        "oi": "iyw",
                        "ot": 11,
                        "rs": 0
                    }]
                }, {
                    "d": "weatherinfolive.com",
                    "l": [{
                        "oi": "jyw",
                        "ot": 11,
                        "rs": 0
                    }]
                }, {
                    "d": "apomedisan.de",
                    "l": [{
                        "oi": "71x",
                        "ot": 11,
                        "rs": 0
                    }]
                }, {
                    "d": "getecovex.com",
                    "l": [{
                        "oi": "15x",
                        "ot": 11,
                        "rs": 0
                    }]
                }, {
                    "d": "anptera.com",
                    "l": [{
                        "oi": "j5x",
                        "ot": 11,
                        "rs": 0
                    }]
                }, {
                    "d": "chillwellshop.com",
                    "l": [{
                        "oi": "q5x",
                        "ot": 11,
                        "rs": 0
                    }]
                }, {
                    "d": "tiendalupina.com",
                    "l": [{
                        "oi": "s5x",
                        "ot": 11,
                        "rs": 0
                    }]
                }, {
                    "d": "omundodopadel.site",
                    "l": [{
                        "oi": "68x",
                        "ot": 11,
                        "rs": 0
                    }]
                }, {
                    "d": "survey-system.org",
                    "l": [{
                        "oi": "j8x",
                        "ot": 11,
                        "rs": 0
                    }]
                }, {
                    "d": "promo-24.eu",
                    "l": [{
                        "oi": "c9x",
                        "ot": 11,
                        "rs": 0
                    }]
                }, {
                    "d": "&dsp_id=264&imp",
                    "l": [{
                        "oi": "2k5",
                        "ot": 6,
                        "rs": 1
                    }]
                }, {
                    "d": "&amp;dsp_id=264&amp;imp",
                    "l": [{
                        "oi": "om6",
                        "ot": 6,
                        "rs": 1
                    }]
                }, {
                    "d": "_moremerry_banner_",
                    "l": [{
                        "oi": "rt6",
                        "ot": 6,
                        "rs": 1
                    }]
                }, {
                    "d": "034E94C4-AFAD-4B92-8698-BD78D694240C",
                    "l": [{
                        "oi": "ju6",
                        "ot": 6,
                        "rs": 1
                    }]
                }, {
                    "d": "amp\\;dsp_id\\=264\\&amp",
                    "l": [{
                        "oi": "8v6",
                        "ot": 6,
                        "rs": 1
                    }]
                }, {
                    "d": "&crid=264_",
                    "l": [{
                        "oi": "mv6",
                        "ot": 6,
                        "rs": 1
                    }]
                }, {
                    "d": "'blue-oceanmarketing",
                    "l": [{
                        "oi": "2x6",
                        "ot": 6,
                        "rs": 1
                    }]
                }, {
                    "d": "ssp=axonix&amp;dsp_id=235&",
                    "l": [{
                        "oi": "fy6",
                        "ot": 6,
                        "rs": 1
                    }]
                }, {
                    "d": "brandName:'Smart Invest",
                    "l": [{
                        "oi": "iy6",
                        "ot": 6,
                        "rs": 1
                    }]
                }, {
                    "d": "Name:'Invest in Amazon",
                    "l": [{
                        "oi": "ry6",
                        "ot": 6,
                        "rs": 1
                    }]
                }, {
                    "d": "brandName:'Investieren Sie in",
                    "l": [{
                        "oi": "cz6",
                        "ot": 6,
                        "rs": 1
                    }]
                }, {
                    "d": "Name:'Marketing Vici",
                    "l": [{
                        "oi": "dz6",
                        "ot": 6,
                        "rs": 1
                    }]
                }, {
                    "d": "ssp=axonix&dsp_id=235&",
                    "l": [{
                        "oi": "jz6",
                        "ot": 6,
                        "rs": 1
                    }]
                }, {
                    "d": "brandName:'Investing'",
                    "l": [{
                        "oi": "007",
                        "ot": 6,
                        "rs": 1
                    }]
                }, {
                    "d": "brandName:'Top Invest",
                    "l": [{
                        "oi": "207",
                        "ot": 6,
                        "rs": 1
                    }]
                }, {
                    "d": "preg.tradelg.net/",
                    "l": [{
                        "oi": "907",
                        "ot": 6,
                        "rs": 1
                    }]
                }, {
                    "d": "preg.marketingvici.com/",
                    "l": [{
                        "oi": "a07",
                        "ot": 6,
                        "rs": 1
                    }]
                }, {
                    "d": "'Blue Ocean Marketing",
                    "l": [{
                        "oi": "l07",
                        "ot": 6,
                        "rs": 1
                    }]
                }, {
                    "d": "brandName:'Smart invest",
                    "l": [{
                        "oi": "617",
                        "ot": 6,
                        "rs": 1
                    }]
                }, {
                    "d": "aecbe61c805a289581256f1d51e058db4e",
                    "l": [{
                        "oi": "717",
                        "ot": 6,
                        "rs": 1
                    }]
                }, {
                    "d": "brandName:'Invest in Netflix",
                    "l": [{
                        "oi": "817",
                        "ot": 6,
                        "rs": 1
                    }]
                }, {
                    "d": "brandName:'investors-advisors",
                    "l": [{
                        "oi": "e17",
                        "ot": 6,
                        "rs": 1
                    }]
                }, {
                    "d": "2fpreg.tradelg.net",
                    "l": [{
                        "oi": "t17",
                        "ot": 6,
                        "rs": 1
                    }]
                }, {
                    "d": "2fpreg.marketingvici.com",
                    "l": [{
                        "oi": "127",
                        "ot": 6,
                        "rs": 1
                    }]
                }, {
                    "d": "ccc6fd09ace3ae45350b32d15ae47fb24e",
                    "l": [{
                        "oi": "r27",
                        "ot": 6,
                        "rs": 1
                    }]
                }, {
                    "d": "brandName:'Geek Invest",
                    "l": [{
                        "oi": "337",
                        "ot": 6,
                        "rs": 1
                    }]
                }, {
                    "d": "brandName:'Vici Marketing",
                    "l": [{
                        "oi": "j47",
                        "ot": 6,
                        "rs": 1
                    }]
                }, {
                    "d": "'blue-ocean-marketing",
                    "l": [{
                        "oi": "b67",
                        "ot": 6,
                        "rs": 1
                    }]
                }, {
                    "d": "53a4747961a879",
                    "l": [{
                        "oi": "a87",
                        "ot": 6,
                        "rs": 1
                    }]
                }, {
                    "d": "9d67bc42ad267c",
                    "l": [{
                        "oi": "u87",
                        "ot": 6,
                        "rs": 1
                    }]
                }, {
                    "d": "548f7eef18aa4a",
                    "l": [{
                        "oi": "4a7",
                        "ot": 6,
                        "rs": 1
                    }]
                }, {
                    "d": "blue-oceanmarketing.com",
                    "l": [{
                        "oi": "kc7",
                        "ot": 6,
                        "rs": 1
                    }]
                }, {
                    "d": "d295258a60cff8",
                    "l": [{
                        "oi": "lc7",
                        "ot": 6,
                        "rs": 1
                    }]
                }, {
                    "d": "bb44d992fee6e3",
                    "l": [{
                        "oi": "uc7",
                        "ot": 6,
                        "rs": 1
                    }]
                }, {
                    "d": "brandName:'Financial Adv",
                    "l": [{
                        "oi": "vc7",
                        "ot": 6,
                        "rs": 1
                    }]
                }, {
                    "d": "dspearhead.com",
                    "l": [{
                        "oi": "fd7",
                        "ot": 6,
                        "rs": 1
                    }]
                }, {
                    "d": "fb8079850a86c0",
                    "l": [{
                        "oi": "md7",
                        "ot": 6,
                        "rs": 1
                    }]
                }, {
                    "d": "brandName:'Financial Trends",
                    "l": [{
                        "oi": "6e7",
                        "ot": 6,
                        "rs": 1
                    }]
                }, {
                    "d": "brandName:'Wicked Agency",
                    "l": [{
                        "oi": "0h7",
                        "ot": 6,
                        "rs": 1
                    }]
                }, {
                    "d": "brandName:'Universidad de Inversi",
                    "l": [{
                        "oi": "1h7",
                        "ot": 6,
                        "rs": 1
                    }]
                }, {
                    "d": "brandName:'South Africa Invest",
                    "l": [{
                        "oi": "2h7",
                        "ot": 6,
                        "rs": 1
                    }]
                }, {
                    "d": "81a5bde5d92271",
                    "l": [{
                        "oi": "5h7",
                        "ot": 6,
                        "rs": 1
                    }]
                }, {
                    "d": "tutorinvestor.com",
                    "l": [{
                        "oi": "8h7",
                        "ot": 6,
                        "rs": 1
                    }]
                }, {
                    "d": "cription:'WhiteOakCapital',brandName:'gu",
                    "l": [{
                        "oi": "dh7",
                        "ot": 6,
                        "rs": 1
                    }]
                }, {
                    "d": "cription:'-',brandName:'Inversi",
                    "l": [{
                        "oi": "eh7",
                        "ot": 6,
                        "rs": 1
                    }]
                }, {
                    "d": "bn=54145493",
                    "l": [{
                        "oi": "li7",
                        "ot": 6,
                        "rs": 1
                    }]
                }, {
                    "d": "bn=54087921",
                    "l": [{
                        "oi": "pi7",
                        "ot": 6,
                        "rs": 1
                    }]
                }, {
                    "d": "brandName:'Empresario-Capitalista",
                    "l": [{
                        "oi": "qk7",
                        "ot": 6,
                        "rs": 1
                    }]
                }, {
                    "d": "brandName:'Invierte en Netflix",
                    "l": [{
                        "oi": "sk7",
                        "ot": 6,
                        "rs": 1
                    }]
                }, {
                    "d": "971eadd31481ac",
                    "l": [{
                        "oi": "uk7",
                        "ot": 6,
                        "rs": 1
                    }]
                }, {
                    "d": "VNKqUK0TjC89bdwDiLGAfVplIJcoSllC6331l1SIJcM",
                    "l": [{
                        "oi": "kl7",
                        "ot": 6,
                        "rs": 1
                    }]
                }, {
                    "d": "plid=eb87212us6551725",
                    "l": [{
                        "oi": "pl7",
                        "ot": 6,
                        "rs": 1
                    }]
                }, {
                    "d": "WjOT2HekKnaeHCI0r1YbDTDpfB0rTKBPjFncFJC95",
                    "l": [{
                        "oi": "xl7",
                        "ot": 6,
                        "rs": 1
                    }]
                }, {
                    "d": "\\x59\\u0058\\x42\\x77\\x62\\u0047\\u0055\\u003d\\x7c\\u0061",
                    "l": [{
                        "oi": "3m7",
                        "ot": 6,
                        "rs": 1
                    }]
                }, {
                    "d": "plid=toddstarnes&",
                    "l": [{
                        "oi": "6m7",
                        "ot": 6,
                        "rs": 1
                    }]
                }, {
                    "d": "plid=lakersnation-1",
                    "l": [{
                        "oi": "fm7",
                        "ot": 6,
                        "rs": 1
                    }]
                }, {
                    "d": "plid=elnuevoherald-one",
                    "l": [{
                        "oi": "gm7",
                        "ot": 6,
                        "rs": 1
                    }]
                }, {
                    "d": "aiLlNjRWGgZgnsT7vP84M70ucaRY7TyIjxSvquWEW3M",
                    "l": [{
                        "oi": "hm7",
                        "ot": 6,
                        "rs": 1
                    }]
                }, {
                    "d": "plid=everydaykoala",
                    "l": [{
                        "oi": "im7",
                        "ot": 6,
                        "rs": 1
                    }]
                }, {
                    "d": "eEig%e%trtxpygatTnra",
                    "l": [{
                        "oi": "mm7",
                        "ot": 6,
                        "rs": 1
                    }]
                }, {
                    "d": "cgsljnel%rrteNcarpseteeyrigv",
                    "l": [{
                        "oi": "nm7",
                        "ot": 6,
                        "rs": 1
                    }]
                }, {
                    "d": "NErt%l%xiuatc%nao",
                    "l": [{
                        "oi": "om7",
                        "ot": 6,
                        "rs": 1
                    }]
                }, {
                    "d": "frEoeecv%%prtermsr",
                    "l": [{
                        "oi": "pm7",
                        "ot": 6,
                        "rs": 1
                    }]
                }, {
                    "d": "stnymBltrleoaipe%rsxBmf",
                    "l": [{
                        "oi": "qm7",
                        "ot": 6,
                        "rs": 1
                    }]
                }, {
                    "d": "cd:ttlmnNBefait%mpreremoee",
                    "l": [{
                        "oi": "rm7",
                        "ot": 6,
                        "rs": 1
                    }]
                }, {
                    "d": "brandName:'invertir en Tesla",
                    "l": [{
                        "oi": "sm7",
                        "ot": 6,
                        "rs": 1
                    }]
                }, {
                    "d": "brandName:'invertir en Amazon",
                    "l": [{
                        "oi": "tm7",
                        "ot": 6,
                        "rs": 1
                    }]
                }, {
                    "d": "brandName:'Invierte en Amazon",
                    "l": [{
                        "oi": "um7",
                        "ot": 6,
                        "rs": 1
                    }]
                }, {
                    "d": "brandName:'tutorinvestorpro",
                    "l": [{
                        "oi": "vm7",
                        "ot": 6,
                        "rs": 1
                    }]
                }, {
                    "d": "eermaxE%p%epigrtttr",
                    "l": [{
                        "oi": "wm7",
                        "ot": 6,
                        "rs": 1
                    }]
                }, {
                    "d": "iejarhieteroedpenmgmgerl%%rtt",
                    "l": [{
                        "oi": "xm7",
                        "ot": 6,
                        "rs": 1
                    }]
                }, {
                    "d": "otcernrehne%e%t%pctejEl",
                    "l": [{
                        "oi": "ym7",
                        "ot": 6,
                        "rs": 1
                    }]
                }, {
                    "d": "ShLvQLd/09GUaUolgPlNF3gJ6Ak6j80vbVcg2BY8J3k",
                    "l": [{
                        "oi": "zm7",
                        "ot": 6,
                        "rs": 1
                    }]
                }, {
                    "d": "plid=2564edkzqn01",
                    "l": [{
                        "oi": "0n7",
                        "ot": 6,
                        "rs": 1
                    }]
                }, {
                    "d": "plid=gradesaver-1",
                    "l": [{
                        "oi": "1n7",
                        "ot": 6,
                        "rs": 1
                    }]
                }, {
                    "d": "plid=774_gradesaver",
                    "l": [{
                        "oi": "2n7",
                        "ot": 6,
                        "rs": 1
                    }]
                }, {
                    "d": "eepEsseesfNrmBxgw%",
                    "l": [{
                        "oi": "3n7",
                        "ot": 6,
                        "rs": 1
                    }]
                }, {
                    "d": "vegppaet%htleesrsns",
                    "l": [{
                        "oi": "4n7",
                        "ot": 6,
                        "rs": 1
                    }]
                }, {
                    "d": "274-2564edkzqn01",
                    "l": [{
                        "oi": "5n7",
                        "ot": 6,
                        "rs": 1
                    }]
                }, {
                    "d": "_0x15767[1];_0x157C4.src",
                    "l": [{
                        "oi": "6n7",
                        "ot": 6,
                        "rs": 1
                    }]
                }, {
                    "d": "plid=hollywood-one",
                    "l": [{
                        "oi": "7n7",
                        "ot": 6,
                        "rs": 1
                    }]
                }, {
                    "d": "eeces%eosBzTegtateaipmyr",
                    "l": [{
                        "oi": "8n7",
                        "ot": 6,
                        "rs": 1
                    }]
                }, {
                    "d": "oey%gNtlwepnzyjtersc",
                    "l": [{
                        "oi": "9n7",
                        "ot": 6,
                        "rs": 1
                    }]
                }, {
                    "d": "0d0fbe79491505577af0507c308819bf",
                    "l": [{
                        "oi": "an7",
                        "ot": 6,
                        "rs": 1
                    }]
                }, {
                    "d": "x55\\u003d\\u007c\\x61\\x57\\x31\\x68\\x5a\\u0032",
                    "l": [{
                        "oi": "bn7",
                        "ot": 6,
                        "rs": 1
                    }]
                }, {
                    "d": "cc%ta%%hroiisv%r",
                    "l": [{
                        "oi": "cn7",
                        "ot": 6,
                        "rs": 1
                    }]
                }, {
                    "d": "ecads2.mediasmart.io",
                    "l": [{
                        "oi": "e",
                        "ot": 7,
                        "rs": 1
                    }]
                }, {
                    "d": "ads.mediasmart.es",
                    "l": [{
                        "oi": "f",
                        "ot": 7,
                        "rs": 1
                    }]
                }, {
                    "d": "xapads.com",
                    "l": [{
                        "oi": "o",
                        "ot": 7,
                        "rs": 1
                    }]
                }, {
                    "d": "adp3.net",
                    "l": [{
                        "oi": "31",
                        "ot": 7,
                        "rs": 1
                    }]
                }, {
                    "d": "decenterads.com",
                    "l": [{
                        "oi": "e1",
                        "ot": 7,
                        "rs": 1
                    }]
                }, {
                    "d": "fmlabsonline.com",
                    "l": [{
                        "oi": "n1",
                        "ot": 7,
                        "rs": 1
                    }]
                }, {
                    "d": "bkserving.com",
                    "l": [{
                        "oi": "o1",
                        "ot": 7,
                        "rs": 1
                    }]
                }, {
                    "d": "bucksense.io",
                    "l": [{
                        "oi": "p1",
                        "ot": 7,
                        "rs": 1
                    }]
                }, {
                    "d": "media-servers.net",
                    "l": [{
                        "oi": "t1",
                        "ot": 7,
                        "rs": 1
                    }]
                }, {
                    "d": "uuidksinc.net",
                    "l": [{
                        "oi": "x1",
                        "ot": 7,
                        "rs": 1
                    }]
                }, {
                    "d": "mobuppsrtb.com",
                    "l": [{
                        "oi": "42",
                        "ot": 7,
                        "rs": 1
                    }]
                }, {
                    "d": "motionspots.com",
                    "l": [{
                        "oi": "52",
                        "ot": 7,
                        "rs": 1
                    }]
                }, {
                    "d": "servedby.revive-adserver.net",
                    "l": [{
                        "oi": "82",
                        "ot": 7,
                        "rs": 1
                    }]
                }, {
                    "d": "uoads.mediasmart.io",
                    "l": [{
                        "oi": "a2",
                        "ot": 7,
                        "rs": 1
                    }]
                }, {
                    "d": "ezmob.com",
                    "l": [{
                        "oi": "b2",
                        "ot": 7,
                        "rs": 1
                    }]
                }, {
                    "d": "unoadsrv.com",
                    "l": [{
                        "oi": "c2",
                        "ot": 7,
                        "rs": 1
                    }]
                }, {
                    "d": "rtb-direct.com",
                    "l": [{
                        "oi": "g2",
                        "ot": 7,
                        "rs": 1
                    }]
                }, {
                    "d": "own-imp.vrtzads.com",
                    "l": [{
                        "oi": "h2",
                        "ot": 7,
                        "rs": 1
                    }]
                }, {
                    "d": "bidscube.com",
                    "l": [{
                        "oi": "i2",
                        "ot": 7,
                        "rs": 1
                    }]
                }, {
                    "d": "securevid.co",
                    "l": [{
                        "oi": "j2",
                        "ot": 7,
                        "rs": 1
                    }]
                }, {
                    "d": "arkeero.net",
                    "l": [{
                        "oi": "k2",
                        "ot": 7,
                        "rs": 1
                    }]
                }, {
                    "d": "reklambids.com",
                    "l": [{
                        "oi": "l2",
                        "ot": 7,
                        "rs": 1
                    }]
                }, {
                    "d": "08ce5.pw",
                    "l": [{
                        "oi": "rmx5",
                        "ot": 4,
                        "rs": 1
                    }]
                }, {
                    "d": "abdigeba.online",
                    "l": [{
                        "oi": "6f76",
                        "ot": 4,
                        "rs": 1
                    }]
                }, {
                    "d": "abvikusca.com",
                    "l": [{
                        "oi": "smx5",
                        "ot": 4,
                        "rs": 1
                    }]
                }, {
                    "d": "adsinspidsp.com",
                    "l": [{
                        "oi": "l3k6",
                        "ot": 4,
                        "rs": 1
                    }]
                }, {
                    "d": "amarktflow.com",
                    "l": [{
                        "oi": "bk56",
                        "ot": 4,
                        "rs": 1
                    }]
                }, {
                    "d": "amazon.fritad.com",
                    "l": [{
                        "oi": "lqx5",
                        "ot": 4,
                        "rs": 1
                    }]
                }, {
                    "d": "avbikuscaoms.com",
                    "l": [{
                        "oi": "tmx5",
                        "ot": 4,
                        "rs": 1
                    }]
                }, {
                    "d": "b3018.pw",
                    "l": [{
                        "oi": "umx5",
                        "ot": 4,
                        "rs": 1
                    }]
                }, {
                    "d": "elasticize467a.online",
                    "l": [{
                        "oi": "wf46",
                        "ot": 4,
                        "rs": 1
                    }]
                }, {
                    "d": "elasticize467aj.online",
                    "l": [{
                        "oi": "xf46",
                        "ot": 4,
                        "rs": 1
                    }]
                }, {
                    "d": "equalized889ou.online",
                    "l": [{
                        "oi": "vf46",
                        "ot": 4,
                        "rs": 1
                    }]
                }, {
                    "d": "eu.rewardpunchcards.top",
                    "l": [{
                        "oi": "k8r5",
                        "ot": 4,
                        "rs": 1
                    }]
                }, {
                    "d": "eu.xglobaltransactionid.icu",
                    "l": [{
                        "oi": "akz6",
                        "ot": 4,
                        "rs": 1
                    }]
                }, {
                    "d": "eu.zgloballlc.top",
                    "l": [{
                        "oi": "9kz6",
                        "ot": 4,
                        "rs": 1
                    }]
                }, {
                    "d": "fairget.com",
                    "l": [{
                        "oi": "2g76",
                        "ot": 4,
                        "rs": 1
                    }]
                }, {
                    "d": "get-a-free-prize.ml",
                    "l": [{
                        "oi": "vmx5",
                        "ot": 4,
                        "rs": 1
                    }]
                }, {
                    "d": "giftcard-gl2018.club",
                    "l": [{
                        "oi": "l8r5",
                        "ot": 4,
                        "rs": 1
                    }]
                }, {
                    "d": "gifts-for-free.cf",
                    "l": [{
                        "oi": "5956",
                        "ot": 4,
                        "rs": 1
                    }]
                }, {
                    "d": "gifts-for-free.ga",
                    "l": [{
                        "oi": "wmx5",
                        "ot": 4,
                        "rs": 1
                    }]
                }, {
                    "d": "gifts-for-you.cf",
                    "l": [{
                        "oi": "ck56",
                        "ot": 4,
                        "rs": 1
                    }]
                }, {
                    "d": "goodluckspace.com",
                    "l": [{
                        "oi": "oj46",
                        "ot": 4,
                        "rs": 1
                    }]
                }, {
                    "d": "googlelucker.com",
                    "l": [{
                        "oi": "tf46",
                        "ot": 4,
                        "rs": 1
                    }]
                }, {
                    "d": "gratorama.com",
                    "l": [{
                        "oi": "x9r5",
                        "ot": 4,
                        "rs": 1
                    }]
                }, {
                    "d": "grayer135cn.online",
                    "l": [{
                        "oi": "mt66",
                        "ot": 4,
                        "rs": 1
                    }]
                }, {
                    "d": "guidetochoosingyou048.com",
                    "l": [{
                        "oi": "w786",
                        "ot": 4,
                        "rs": 1
                    }]
                }, {
                    "d": "happy.luckydraw.space",
                    "l": [{
                        "oi": "9ba7",
                        "ot": 4,
                        "rs": 1
                    }]
                }, {
                    "d": "hipstarclub.com",
                    "l": [{
                        "oi": "n8r5",
                        "ot": 4,
                        "rs": 1
                    }]
                }, {
                    "d": "iawardyounopoints.top",
                    "l": [{
                        "oi": "o8r5",
                        "ot": 4,
                        "rs": 1
                    }]
                }, {
                    "d": "icardeleaf.top",
                    "l": [{
                        "oi": "p8r5",
                        "ot": 4,
                        "rs": 1
                    }]
                }, {
                    "d": "icardi.top",
                    "l": [{
                        "oi": "q8r5",
                        "ot": 4,
                        "rs": 1
                    }]
                }, {
                    "d": "jacm.patracking-ff.com",
                    "l": [{
                        "oi": "6956",
                        "ot": 4,
                        "rs": 1
                    }]
                }, {
                    "d": "lanospel.com",
                    "l": [{
                        "oi": "r8r5",
                        "ot": 4,
                        "rs": 1
                    }]
                }, {
                    "d": "ldfkadfdflkp.top",
                    "l": [{
                        "oi": "nj46",
                        "ot": 4,
                        "rs": 1
                    }]
                }, {
                    "d": "leadzuaf.com",
                    "l": [{
                        "oi": "s8r5",
                        "ot": 4,
                        "rs": 1
                    }]
                }, {
                    "d": "luckstarclub.com",
                    "l": [{
                        "oi": "t8r5",
                        "ot": 4,
                        "rs": 1
                    }]
                }, {
                    "d": "markbxcgaa.top",
                    "l": [{
                        "oi": "rf46",
                        "ot": 4,
                        "rs": 1
                    }]
                }, {
                    "d": "mydowngradegreataflash.icu",
                    "l": [{
                        "oi": "br56",
                        "ot": 4,
                        "rs": 1
                    }]
                }, {
                    "d": "net-dg55.stream",
                    "l": [{
                        "oi": "u8r5",
                        "ot": 4,
                        "rs": 1
                    }]
                }, {
                    "d": "net-dq22.stream",
                    "l": [{
                        "oi": "zmx5",
                        "ot": 4,
                        "rs": 1
                    }]
                }, {
                    "d": "newdaytoday95.live",
                    "l": [{
                        "oi": "s4m6",
                        "ot": 4,
                        "rs": 1
                    }]
                }, {
                    "d": "nextwebgames.com",
                    "l": [{
                        "oi": "bkz6",
                        "ot": 4,
                        "rs": 1
                    }]
                }, {
                    "d": "olimpiamarketing.com",
                    "l": [{
                        "oi": "0nx5",
                        "ot": 4,
                        "rs": 1
                    }]
                }, {
                    "d": "other2018cc.club",
                    "l": [{
                        "oi": "d756",
                        "ot": 4,
                        "rs": 1
                    }]
                }, {
                    "d": "patracking-ff.com",
                    "l": [{
                        "oi": "cr56",
                        "ot": 4,
                        "rs": 1
                    }]
                }, {
                    "d": "real-prizes.de",
                    "l": [{
                        "oi": "v8r5",
                        "ot": 4,
                        "rs": 1
                    }]
                }, {
                    "d": "rewardcenterbigfishcasino.ooo",
                    "l": [{
                        "oi": "uf46",
                        "ot": 4,
                        "rs": 1
                    }]
                }, {
                    "d": "rewardcenteriphonetester.today",
                    "l": [{
                        "oi": "e756",
                        "ot": 4,
                        "rs": 1
                    }]
                }, {
                    "d": "rewardcentersimpsonstappedout.cf",
                    "l": [{
                        "oi": "fr56",
                        "ot": 4,
                        "rs": 1
                    }]
                }, {
                    "d": "rewardcentersimpsonstappedout.club",
                    "l": [{
                        "oi": "ir56",
                        "ot": 4,
                        "rs": 1
                    }]
                }, {
                    "d": "rewardcentersimpsonstappedout.com",
                    "l": [{
                        "oi": "gr56",
                        "ot": 4,
                        "rs": 1
                    }]
                }, {
                    "d": "rewardcentersimpsonstappedout.icu",
                    "l": [{
                        "oi": "hr56",
                        "ot": 4,
                        "rs": 1
                    }]
                }, {
                    "d": "rewardcentersimpsonstappedout.ooo",
                    "l": [{
                        "oi": "kr56",
                        "ot": 4,
                        "rs": 1
                    }]
                }, {
                    "d": "rewardcentersimpsonstappedout.top",
                    "l": [{
                        "oi": "jr56",
                        "ot": 4,
                        "rs": 1
                    }]
                }, {
                    "d": "rewardcentersimpsonstappedout.world",
                    "l": [{
                        "oi": "er56",
                        "ot": 4,
                        "rs": 1
                    }]
                }, {
                    "d": "rudy.adsnative.com",
                    "l": [{
                        "oi": "gjj6",
                        "ot": 4,
                        "rs": 1
                    }]
                }, {
                    "d": "rzprotect.pw",
                    "l": [{
                        "oi": "r4m6",
                        "ot": 4,
                        "rs": 1
                    }]
                }, {
                    "d": "samsung-ns.club",
                    "l": [{
                        "oi": "f756",
                        "ot": 4,
                        "rs": 1
                    }]
                }, {
                    "d": "satuwed.com",
                    "l": [{
                        "oi": "sf46",
                        "ot": 4,
                        "rs": 1
                    }]
                }, {
                    "d": "savingexpertcom.top",
                    "l": [{
                        "oi": "yqh6",
                        "ot": 4,
                        "rs": 1
                    }]
                }, {
                    "d": "surveysandpromotionsonline.com",
                    "l": [{
                        "oi": "dr56",
                        "ot": 4,
                        "rs": 1
                    }]
                }, {
                    "d": "thecasuallounge.at",
                    "l": [{
                        "oi": "7ab6",
                        "ot": 4,
                        "rs": 1
                    }]
                }, {
                    "d": "theperfecthappiness.club",
                    "l": [{
                        "oi": "w8r5",
                        "ot": 4,
                        "rs": 1
                    }]
                }, {
                    "d": "usarewardspot.com",
                    "l": [{
                        "oi": "ek56",
                        "ot": 4,
                        "rs": 1
                    }]
                }, {
                    "d": "vip.fortunatepeople.xyz",
                    "l": [{
                        "oi": "lfc7",
                        "ot": 4,
                        "rs": 1
                    }]
                }, {
                    "d": "win-free-prize.com",
                    "l": [{
                        "oi": "fk56",
                        "ot": 4,
                        "rs": 1
                    }]
                }],
                "h": "document",
                "f": "write"
            }]
        },
        prebidNameSpace: clientSettings.prebidNameSpace || 'pbjs',
        prebidExcludeBidders: clientSettings.prebidExcludeBidders || [],
        enable_integrations: 'prebid',
        devMode: clientSettings.devMode,
        onRendered: clientSettings.onRendered,
        onPrebidError: clientSettings.on_prebid_error,
        callback: clientSettings.callback || defaultCallback,
        isAR: clientSettings.isAR || 'false' === 'true',
        arC: parseInt('3'),
        isMaster: typeof clientSettings.isMaster == 'boolean' ? clientSettings.isMaster : true,
        isPerf: 'true' === 'true',
        isSA: 'false' === 'true',
        isXF: 'true' === 'true',
        isAZOnly: 'false' === 'true',
        isNS: 'false' === 'true',
        nsSample: 'undefined',
        nativeSelectors: 'undefined',
        nativePassback: 'undefined',
        ieBatchProcessingTimeout: 'undefined',
        isExtPlcmt: 'undefined' === 'true',
        prebidUseTopWindow: typeof clientSettings.prebidUseTopWindow == 'boolean' ? clientSettings.prebidUseTopWindow : 'undefined' === 'true',
        isIntegrationEnabled: isIntegrationEnabled,
        isCnstCheck: 'true' === 'true',
        getPropertyIdForAPS: clientSettings.getPropertyIdForAPS || null,
        cnstSample: 0.001,
        isPIMG: 'undefined' === 'true',
        isNTVD: 'undefined' === 'true',
        prebidCustomizeBid: clientSettings.prebidCustomizeBid,
        send_amazon_bidder: 'false' === 'true',
        isPDS: 'undefined' === 'true',
        isExtPlcmtInDiv: 'undefined' === 'true',
        isVS: 'undefined' === 'true',
        vsSample: 'undefined',
        isConsentXF: 'undefined' === 'true',
        consentXFSamplingRate: '1'
    };

    var scriptId = !!confiantGlobal.settings ? settings.propertyId : null;
    if (confiantGlobal && confiantGlobal.settings && confiantGlobal.settings.propertyId === scriptId &&
        integrationSetting.integration_type !== 'native') {
        return;
    }
    var propertySettings = scriptId ? confiantGlobal[scriptId] || (confiantGlobal[scriptId] = {}) : confiantGlobal;
    propertySettings.settings = settings;
    propertySettings.settings['prebid'] = integrationSetting;

    function isIntegrationEnabled(type) {
        var integrations = propertySettings.settings.enable_integrations;
        return integrations && integrations.indexOf(type) > -1;
    }
    var e = document.createElement('script');
    e.onload = initConfiantQueue;
    e.onerror = initConfiantQueue;
    e.async = true;
    if (scriptId) {
        e.id = scriptId;
    }
    e.src = '//' + [
        propertySettings.settings.confiantCdn,
        integrationSetting.integration_type,
        integrationSetting.exec_test_ver ? integrationSetting.exec_test_ver : integrationSetting['exec_ver'], 'wrap.js',
    ].join('/');
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(e, s);

    function initConfiantQueue() {
        confiantGlobal.cmd = confiantGlobal.cmd || [];
        for (var i = 0; i < confiantGlobal.cmd.length; i++) {
            try {
                confiantGlobal.cmd[i].call(null);
            } catch (e) {}
        }
        confiantGlobal.cmd = {};
        confiantGlobal.cmd.push = function(funcToExec) {
            funcToExec.call(null);
        };
    }
})();