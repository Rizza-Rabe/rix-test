'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "5fbd305a3ea7058a2f1cc3fa2eddf233",
".git/config": "a78a870e48cc0ed0879255733abe2211",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "59d7a202ff89a5ad98b5ab2070ba4a24",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "6d92e1b9021e38a87ad923523d0b59b6",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "661a58bbfa7a0858cea1ca97d112ba33",
".git/logs/refs/heads/main": "7d00077caed2ed9a917d3d7244ab94dd",
".git/logs/refs/remotes/origin/main": "4ecd75bf5a81324d4f41860127f819a2",
".git/objects/01/bcca7d1c23955f7aeda6a269b1b7f540802096": "635a6822e2a56f7f333d54c66b0234db",
".git/objects/03/9f9133b7d000597028454bc5cafac617ae25ac": "5ff04558a43b0169b75e0697eb385a30",
".git/objects/06/55a6ade0471531e140bac13a859ec499646893": "21d5f9add04d7ff06f2cdb027bcde9af",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/0a/380f3477770f26633d4a5879684b460f764da7": "9f8d9ecef4ebe01f8b7848f2029b7404",
".git/objects/0e/332c4536e8141aacec96463717fb3c4a298b70": "0d1d7fbaca76c545d0370c0b9dac4329",
".git/objects/0e/5478c0d31d6bd3d974ef48d0bfe819ad6668b0": "c747605931aeed99eba39862650b9380",
".git/objects/0f/9085f425e3674c919d75bef81bcb3d62304cd7": "5428bbb7c31cf3aae8e12bd85aa38de0",
".git/objects/13/0e1afaeeff542c2599133c68580b60f2de42a3": "8f5e755a558ffc2ff8c1b9d627c05cf9",
".git/objects/14/67931c5ec61233545d0e281e593dcf4c2bbb6b": "742fd083c7d50cc7a539ff29476b3f40",
".git/objects/16/13484695524be252cb089e1f633c91d2a47cb7": "48eb05a61e518eb93d17529fc0103d7d",
".git/objects/17/2d52ab176295ac9e034a24b7eb5862dc98bec0": "dd168b3dd3e3966ccba257765c14d40e",
".git/objects/18/4001e2f4c5775312c91949ef7d0ec078cb11a7": "e4fd38be84a4dd04dec13d666b00c135",
".git/objects/19/20f786d8929a3668d7be62fb5ed0404d93cdc3": "76037a5495e963bb44b336e6e110fa30",
".git/objects/1c/8485d900ab1f05c95a6a1df6e0658df95c4b31": "2cff1bfe783730929addf44623ed4554",
".git/objects/1d/1c09e359de509c8665a870de2aea5564b0f170": "5056767cf5bedf35f825e9d8b198b873",
".git/objects/21/6fb3292bc32a5f101ae1df89240553bd9cb20a": "4db74132edb2bc608ba444b5b650f81a",
".git/objects/22/bf63b981316594d6d641d52326cc428cfb3384": "d301d6a8df8409175ed3107551149350",
".git/objects/22/df24a79678e02241342c2641991edc252d3390": "3c54c16a88b28929069332d8d7fd02e8",
".git/objects/23/8cea0835286627ec93592836e4a9f060e123fa": "2a2adfd30012fd07963af36bbffbe25b",
".git/objects/24/7cee8e4d5cec5cfd4ae1df03a7e13c3f4a5b5d": "a8092801dfab775431180f41ff36af2b",
".git/objects/27/cb516731e3c5a654a7e6e4c9a23f3b06d94031": "b3984924c4f6f4c6ca51d2e94fe63835",
".git/objects/28/ff8968cd85148bf7878e97ca3e12899346a5a4": "5329bbfd7da00d127123ce3da76c6f5c",
".git/objects/29/db8e20613912113906e1b2073b492e54fab0f0": "a27ad6d69a255fd3c5c588daef8f1817",
".git/objects/2a/b084793348ba44b334d28e91055b6c965bbe6b": "90c2e15450b23d723ddcd49cd2771046",
".git/objects/2b/a3527fccb0b708e7884f273663413f35d6f061": "e761047efbad96b9de317e416b1f38ae",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/2d/177c4e1e20ba37e2dd06610a1bf78bdc53a1ea": "f5e1b255a6a491ea3ba182160d2ca7ae",
".git/objects/30/6dac5ed8d40c1a67b51105b2c459a386061bc3": "0a17491a92c8dee602194b7eabdb73a1",
".git/objects/31/69e8e99a576ce113c1a5ddabf5cec68d03563f": "3a460930083fc444b44709452e5376cf",
".git/objects/33/62c62dc6c81c91cc29a8defadcbf50f9e5c665": "25fd4e47743555ac31b4663868d63a3b",
".git/objects/35/48352e6d7f9cb7f6cfa35c85a8ceaff91a6c14": "54d5d1829c0b78d198a41ae7b91b3e98",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/38/b50c82fc083ce64be525bb673a8621634e63fc": "d42299f9ff678b652377fd4ee580b96d",
".git/objects/3a/490e1c498e5dc32230d70fac27ffe34dbc721c": "01a0530bdec9f68f6ecae3b33ef87b35",
".git/objects/3b/6014fc2977e640dec5d6ac27c4a5d415cb5554": "0e9317c7c179438e91762347370d7724",
".git/objects/3b/6246a82b48906e2de4b981798f0214b8b5b9cf": "12c483dda8821f4a31c0a33871199487",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/3f/4b6411c0279c8870c1a1b941598f359e5e0f95": "df0806bce6c34cb1b213d3e0f5be44c6",
".git/objects/44/82a590235a8c198999236c4bfecddc1e157578": "761e854e2010d1db5e18c602f32aa3e1",
".git/objects/45/103b41d44e2dd267be2876233ede16ea547f96": "d92576a18aaa342f0d37668954b1b758",
".git/objects/45/4b84f6676443c37e4ddf35d86c90125edd4af5": "ec800493087c45140341d1c4a1f86298",
".git/objects/45/caa9b8b5687325bb45072cc3fbac0e83d591ba": "b21851b5eb728b23d5d29e98f9f33d90",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/f64d61064c62026217d4a4f1e3f148a2b98169": "3651d8e44c95e17df0c1951dd1993717",
".git/objects/47/2263acffb01f7388b8b6fa98b488daa7a5ed40": "6ca3f80910be702941fff3f1609eb7f8",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4c/a2a7c226d2c3e26f0b9dde74214486d0baa896": "734657b1f27c72d07dd9e52a25c020c1",
".git/objects/4f/16b3437b865bd931e7e1ef053f4bea963cdb93": "72898cbd69bbe76867f652e7297e398b",
".git/objects/51/fcb2962779c4203fe5bcfbc3ba462ec234774c": "988a35e46c78854100cdcb752747aab6",
".git/objects/52/59e9a8b74e6650120a555b1f1a9ba9e722c137": "5e4baf888477eea5a200c46d771da872",
".git/objects/53/02338659e00b321e3a15c0284510cda2d5303c": "ff0e72e0c2cb5237bb35b8a14d265d00",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/56/c216cd5edcf93ea084b254948939290b998f54": "c9bd5681ad387fc2a79f0a5792d1d9ee",
".git/objects/5b/11054077888448311fd59e8f57158a08f83130": "143c8989d0a08679d01a0066a995c8d1",
".git/objects/5e/2384f120a90f4ed1e9393b57a2f8bc36eef4aa": "0df41e053be06082ac19e4f8cf550b84",
".git/objects/64/3e2060bd8654504fb962cdd01eccd1c4fd136f": "c4d274a6bf88b340a4cb088a00529565",
".git/objects/66/74ff76f7124a6d15091386f528a7a3a6dab4f2": "eaea8993c68ee7fbc105be3615b3536a",
".git/objects/66/e1efa62a9be1e6e4b901163538f6e7047948f6": "c3f28ce060b520056ba947f934b54362",
".git/objects/78/490ea1f11ccadf866d09e9019bf2e2dc70ba1b": "6443acfe85e3a6c554c912d6ff6117d4",
".git/objects/7a/974dec10a2e4b827a510feca5fd46c98dac389": "9bb732880b07e61cdf666f00f02dcd8c",
".git/objects/7a/ae7f2a3d2e482dcb03ae354f46bed7a63ad9c7": "1876ef30a49d5aa89ada6284e1afce9e",
".git/objects/7c/cc218a162e03b87dbcfc4a3db5377f847a2d1a": "c056e6f5fb12777d3ebe29edf62d4dd4",
".git/objects/7f/ece2f3c675f5ecd48cca89c2a1c7b3c540e825": "d97ee4bac8056aa808b2500251213de1",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/83/1200bd46fbdfeae1e68e6cf293915c32b6032f": "c6c128eba8163694b8dc7f3f7aaf1cc6",
".git/objects/85/358cb29eda8cdc270794ed73b38a044b3491f9": "31570c166364935b5d523defc66689e9",
".git/objects/85/62bec003fe4c570bcfdc58e5e7ace3bf82acec": "c01168030af76bdd1f77a5de03641a85",
".git/objects/87/bd8dfdf8c75eced94314383e4aeabc5243d4c3": "72fd666f29cca1f438dcc356ae48c482",
".git/objects/88/18cf613bf54ddaddf28d0c370af7f33e31c76d": "376152234b3c8b1c352a4a218fe243f8",
".git/objects/8c/001d514bff64fd9d8ca86cf2aaba056e9dbda4": "888d700a3c8ba56b1df50b4ad8bb8cde",
".git/objects/8c/e09f39a97f6233cb9fc4832c8b721d1277720a": "7c45e81ecb267c2931195530e696a8dc",
".git/objects/90/21fc1bc6dd8b5f81a785d66aee53d5a0863a4d": "fae7bb988ffc6649efe83e2eb3a1a632",
".git/objects/94/1b9a1e991eb5eb5067c3e7976ba8e9866d056d": "9fea404ebf1bad24913ed4af5218128f",
".git/objects/95/b3a6a086416e2102ba29f4440b3638b71df282": "c58e679fa0b69ce9d8f654240a9bad5d",
".git/objects/96/5f268e91b7f468ea4ded85a8f2abcddfe1f5a9": "6cde620475753acf951a3fbb6b42aca1",
".git/objects/99/a3520f4f5fc995790ea9af423e75f8a4b84980": "538b74def6a10be6bc802c1ea67806cd",
".git/objects/99/f03f6f5c18c2786ab5157b6e16d4289d1cf271": "de48473213fcf9c25ff3881982590421",
".git/objects/9b/ad7e2db4064384d0bbf434d3b08fa9a19da2cf": "ce0d3e4687228596cf5d95f1e007b27e",
".git/objects/9e/540336905970c4d3d1c75c8440af6a36f09e86": "3d6c8e31891db2a1de28c3acf2d5ed39",
".git/objects/9e/ca19873f945cd1b1faacb7ec26a7a5c7e1f59c": "79af11b02a522bbf347f85c257762c8d",
".git/objects/9f/ef87196fd90b065abc73ad006b56612178b9dc": "35070cfefb4b2a64e219be46481492b1",
".git/objects/a2/46411f5200ed6b91add62b554affe8621cea38": "49e461b127fafe37b5a5e8afc10ee435",
".git/objects/a8/12dd1140b122c37f1eed24999df3e85565e9c3": "ecc8410814f73d1dde9caaf7cddf2648",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/af/e0bcb68349a356a5b4e6f0b302d45cc5592294": "f3bdb39372a8bc52165aca6652261d28",
".git/objects/b2/dc1da6301524b8f9b778323d0df065e70edab1": "68aad1b629c2669b860d3a751bb985af",
".git/objects/b6/d8418b0effac24e51bd017b3f56ebd87b37871": "dd2d39dceee7129469a07ef656ba399e",
".git/objects/b9/a0a3149040471a4919b77598b5df241b4439ad": "bb420bd6dc83fd788ea06c0bf7ae75ba",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bd/f909b6c7a88554c5d29fb7df0a31e34d4851c8": "cea515c6f583ef2e1665bb59de53a2a4",
".git/objects/bf/f67f5714fd1242e5594d9d9e7c60fb92c8dd4d": "1c839b5ed1d196cb2796e37eb5531da9",
".git/objects/c6/0f4988ce328900e0d01ba306db360d3712361c": "54175cf54ff3e86188cd12aeed2b065d",
".git/objects/c6/95fa051d527ae08d427a61fb9f4578f61ce6fa": "2920d81c167a23754a86bc58ecc42420",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/d1/07d29f1ba405b2d9e992cd2c04877227b00027": "82cd860e9127988a93f29a3723c4812c",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d4/c4a9f40714c743da48e2005c7b653cfab977b8": "b1cd6a72bf35069b24f2eaa408e466ff",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d7/e1d771cd9254b36bd4f3d544e3758f08532171": "d2fd28c78b14e4c5b9ecb3aac3ddbe96",
".git/objects/da/a2f4dfe1daffb6f27cbe487ba486f10e2619a0": "987ff0a6e3dcd5f9246738417b83ea0c",
".git/objects/de/00d572ef05383a0d750ba5ba6c4819f890b923": "3de272a999bdf8242df43b1641014af6",
".git/objects/df/80f2d5f30a1e2a05f43d6f152e7f946f07a339": "3af5e3d67f92b21e71ffce21109de3ba",
".git/objects/e5/6e50f6f3aafb06ec84cd9c425db530a8d2f189": "49b824cfcc56cdfb2142ca60f854391c",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/55dc987b0db3ccd24a8869a087233a0e124f27": "9b242467f4dfe05ce7d2727a68a1ea66",
".git/objects/e9/0f4f3fe2407ec586466410eecaa3042840bfca": "ce8d46f9580824689f31d141e5f5d17a",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/24f62ea8f78f76e3ec92b7bf56775ccbf7a4fa": "805270570dd6040826e0cb24bdd8aac9",
".git/objects/f2/c48b66c88ede07f8df87d9af6b9a0d29a59a49": "d5588d81daede877447dff32952f2273",
".git/objects/f3/caf824ff5c6d2795b677a84b6cc6b6ce3567bd": "62d3df34fdf54707ccae529880abeff0",
".git/objects/f5/4eb2b0532ea6c412cdec1353716b5510134574": "7c166bfcb2ec8d0c6f58b36e5581d3f1",
".git/objects/f6/040eafff3925ab7f7b367041bea2963338f53e": "2e18758bc24978245cfc3f9f7a26868d",
".git/objects/f8/2104776895a3a177f65fd36ab212f7433038d3": "f78d7eae724d1528bdf93e30f791f17a",
".git/objects/fa/ae27c73e64a77f2bbf9e34649a58fb2de35bc4": "ad7cf29382406c134de7d1ad40009bc2",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/fd/e2eb46eeb264a17ac295f42baa7dfd3e4acbe8": "2b512140d2ec6a012ea620a3f13021b2",
".git/objects/fd/e525f0ec9a8acb6f6404461ae262955d0346a0": "6640f8b520165ebdd7bb5fb8b4f46b4b",
".git/objects/ff/20a20a60b43063d8751b5da57670210804453a": "1274c234e0e18c7c0725aeb0fbcd8a8a",
".git/ORIG_HEAD": "492469ab71da8ef7326d6c1e77d4ca3c",
".git/refs/heads/main": "2fb65d2a21143ec1396acc1371287fe0",
".git/refs/remotes/origin/main": "2fb65d2a21143ec1396acc1371287fe0",
"assets/AssetManifest.bin": "52d62bf23a81a15ff2d953a6bd4551c8",
"assets/AssetManifest.json": "f56b4dc83e905de6c981f7ad53d21e15",
"assets/assets/account_icon.png": "29479ba0435741580ca9f4a467be6207",
"assets/assets/add_white_icon.png": "ca9749263807fb890410905009ea586e",
"assets/assets/back_white_icon.png": "67a5bd706584ace07aad14ddf269992f",
"assets/assets/camera_icon.png": "33984f0debe7281b72d75baa8195132d",
"assets/assets/clock_icon.png": "fbb2310c6403bbeeaff0047d9097365f",
"assets/assets/clock_in_icon.png": "fbb2310c6403bbeeaff0047d9097365f",
"assets/assets/club_members_icon.png": "fc64a2ed0170a4dae9860575953736df",
"assets/assets/copy_icon.png": "71ba20ec298c6737abe27c80cfbc9b4a",
"assets/assets/edit_member_icon.png": "0984ce78f88886e9064167f8caef6320",
"assets/assets/emptybox_icon.png": "ac637a591d8d4ab26e600917fab242dc",
"assets/assets/encoder_icon.png": "a275517783a6de1993f7d6d071330267",
"assets/assets/gallery_icon.png": "3682496b6bb48ca7d64242a08157019f",
"assets/assets/list_icon.png": "0b721e533aedc38aa39530818148fc99",
"assets/assets/location_icon.png": "cd4aff5d0037488d39e079b23fd2ec9a",
"assets/assets/logo.png": "c41191a8818ddbab8f1714478240d4d5",
"assets/assets/logout_white_icon.png": "793c523079c51af90c9fe1dada5fff4a",
"assets/assets/logs_icon.png": "2db0a2f7e4874388d2bc23e9f5ea345b",
"assets/assets/moderators_icon.png": "bdf596efff142c4a029dfb39af95b2e1",
"assets/assets/more_icon.png": "6df4089d3e91247ba0f200e4bd7f3768",
"assets/assets/numbers_icon.png": "59ed0175d80892bfa275b578797a5397",
"assets/assets/pigeon_background.png": "3ddb9d4d9ce7b5caec12da035a0d72cf",
"assets/assets/popup_add_normal_icon.png": "737ec290471f789e58b8e1e10cd45789",
"assets/assets/popup_search_normal_icon.png": "03bba07b9a6aa16f19ac92f11aaa60a3",
"assets/assets/popup_transfer_normal_icon.png": "025386434049891f4c905af04c7e13b7",
"assets/assets/qr_code_icon.png": "0e3c09c30fa77704c3ef1622fc4561a7",
"assets/assets/register_black_icon.png": "91d7cee01d50a3fa3e12ca026e03bd96",
"assets/assets/right_arrow_icon.png": "3b6e1869ac79ce4644bc6b83890c6357",
"assets/assets/search_grey_icon.png": "f0e9baaa0048c3daa2e58369d162de94",
"assets/assets/search_icon.png": "501c088bf114958e87ca413c6e3ebd93",
"assets/assets/terms_icon.png": "ff29a57700ab3a4f7f0df0b028d2b035",
"assets/assets/transfer_icon.png": "bf0232dc032a1d8550f72dc10e5ffa18",
"assets/assets/trash_icon.png": "1cf691ccce511a1ee0cbf49ddeba0e67",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "231bca9190c8bfc0ce828ac853db3cac",
"assets/NOTICES": "7ed89f0c2287422a18e63b3da3065c0e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.ico": "95460dacf9dc5397725244c209085453",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "f53fdad3c2d8632e2b9b81453d3757ee",
"icons/Icon-512.png": "c41191a8818ddbab8f1714478240d4d5",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "ea32e8b85188fd5b12e580f26766b006",
"/": "ea32e8b85188fd5b12e580f26766b006",
"main.dart.js": "c14e75d8ebfef035a8bdae90e5b0413d",
"manifest.json": "fd265ff837b40150e6b2dd5fa2609bda",
"version.json": "36cca072544aa09cb717d4db1e492d5b",
"worker.js": "f916974921b8b3d98f9fdfc4b68e5432"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
