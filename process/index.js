// process.argv.forEach((val, index) => {
//     console.log(`${index}:${val}`)
// });

// node process
// 0:C:\Program Files\nodejs\node.exe
// 1:F:\node\process

// console.log(process.argv[0], process.argv0)
// console.log(process.execPath)
// console.log(process.cwd())
// console.log(process.execArgv)

// console.log(process.channel)

// console.log(process.config)
//此对象描述了用于编译当前Node.js执行程序时涉及的配置项信息
// const conf = {
//     target_defaults: {
//         cflags: [],
//         default_configuration: 'Release',
//         defines: [],
//         include_dirs: [],
//         libraries: []
//     },
//     variables: {
//         asan: 0,
//         build_v8_with_gn: false,
//         coverage: false,
//         debug_nghttp2: false,
//         enable_lto: false,
//         force_dynamic_crt: 0,
//         host_arch: 'x64',
//         icu_data_in: '..\\..\\deps/icu-small\\source/data/in\\icudt62l.dat',
//         icu_endianness: 'l',
//         icu_gyp_path: 'tools/icu/icu-generic.gyp',
//         icu_locales: 'en,root',
//         icu_path: 'deps/icu-small',
//         icu_small: true,
//         icu_ver_major: '62',
//         nasm_version: '2.13',
//         node_byteorder: 'little',
//         node_debug_lib: false,
//         node_enable_d8: false,
//         node_enable_v8_vtunejit: false,
//         node_install_npm: true,
//         node_module_version: 64,
//         node_no_browser_globals: false,
//         node_prefix: '/usr/local',
//         node_release_urlbase: 'https://nodejs.org/download/release/',
//         node_shared: false,
//         node_shared_cares: false,
//         node_shared_http_parser: false,
//         node_shared_libuv: false,
//         node_shared_nghttp2: false,
//         node_shared_openssl: false,
//         node_shared_zlib: false,
//         node_tag: '',
//         node_target_type: 'executable',
//         node_use_bundled_v8: true,
//         node_use_dtrace: false,
//         node_use_etw: true,
//         node_use_openssl: true,
//         node_use_pch: false,
//         node_use_perfctr: true,
//         node_use_v8_platform: true,
//         node_with_ltcg: true,
//         node_without_node_options: false,
//         openssl_fips: '',
//         openssl_no_asm: 0,
//         shlib_suffix: 'so.64',
//         target_arch: 'x64',
//         v8_enable_gdbjit: 0,
//         v8_enable_i18n_support: 1,
//         v8_enable_inspector: 1,
//         v8_no_strict_aliasing: 1,
//         v8_optimized_debug: 0,
//         v8_promise_internal_field_count: 1,
//         v8_random_seed: 0,
//         v8_trace_maps: 0,
//         v8_typed_array_max_size_in_heap: 0,
//         v8_use_snapshot: true,
//         want_separate_host_toolset: 0
//     }
// }

//================================================

// const startUsage = process.cpuUsage();
// console.log(startUsage)
// { user: 62000, system: 46000 }

// spin the CPU for 500 milliseconds
// const now = Date.now();
// while (Date.now() - now < 500);

// console.log(process.cpuUsage(startUsage));
// { user: 547000, system: 16000 }



console.log(process.env)