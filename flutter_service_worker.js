'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "4148127c6366e9b5def62cd3f5b6ece1",
".git/config": "a78a870e48cc0ed0879255733abe2211",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "9662a37c4c4be55bdfcf0417acae1476",
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
".git/index": "2bebfe42ba357e9bafb52155b62c4abc",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b85f390de9c08772bcbe2a02ba79a4dd",
".git/logs/refs/heads/main": "99f521ede25f8bbc2f6532732ba7da18",
".git/logs/refs/remotes/origin/main": "9c10f002df763763593f95836d87ba86",
".git/objects/00/5639bd120fc57ee2464ff5859e0e52c2b91177": "07e27bf1f3f621811add449939de7bc1",
".git/objects/00/aa56b490873c2fda73ad267d41249a166d0f29": "2bcb282ce46baf96bb96a195b019b8c9",
".git/objects/01/3ccf4933de6d12b532b3efcfc8e67535b6bc8a": "8a0839660f82e72627b403727558cc8f",
".git/objects/01/bcca7d1c23955f7aeda6a269b1b7f540802096": "635a6822e2a56f7f333d54c66b0234db",
".git/objects/01/d10bec4f1def5878b0495f850b5870ef8d750b": "c171654c227b20d596f7b179446bd0f5",
".git/objects/02/40e0ca451dae55cbf6bcda3ce7602e01510be9": "6a917e2dfd81cce54651f543dd9a8efd",
".git/objects/02/b05d715f6d6e657f6aacb1cea73ede2206fe38": "49b8dc6c1d3716d82ca2e1ccb2275ea8",
".git/objects/03/3c804369dd829c70a5691b272604366accbfa3": "124b85a831fe9913f66120c5bc7ede30",
".git/objects/03/9a5716ade104d91dae04b61f31aa2f0890f72a": "2b517bfcb3308e20fb8f4efe109f512b",
".git/objects/03/9f9133b7d000597028454bc5cafac617ae25ac": "5ff04558a43b0169b75e0697eb385a30",
".git/objects/03/aee38c460413596db2a4dcd1925bfd61098dc7": "156e465638ca0b76e7c543df50b99193",
".git/objects/03/fd7840661ead9d2dab825c9622d4c259bfc389": "9c6ef1a5e98726c1f727e22c075338fb",
".git/objects/05/ab4e6d9cd8177b66634300719a831486a4e1eb": "2bfeee3dc95f3014f3232cf93e369b6a",
".git/objects/06/55a6ade0471531e140bac13a859ec499646893": "21d5f9add04d7ff06f2cdb027bcde9af",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/09/22c4197e547a7975833eafe8747e6b2f189a4c": "c41dd1e01ff72b578931c30153542d67",
".git/objects/0a/380f3477770f26633d4a5879684b460f764da7": "9f8d9ecef4ebe01f8b7848f2029b7404",
".git/objects/0c/4e12a58d453b1a874dc7e11c28286ec1d3a247": "9711e05d03795e6e0a5c5e7ac768ad12",
".git/objects/0d/a5c00779ced769211d6f45558acc7934e97b6f": "4f6e82e4254faa69f17e728847e78b72",
".git/objects/0d/e952c79c99b4b84d05eb27a0dfd83493532dbc": "ab6acde4b05dbe27e6d58191fd322d7d",
".git/objects/0e/2b8e55ec160e73ec9a3c142db3c9bf057f8054": "17e62d2610e4b87cd38d61f7f16329c2",
".git/objects/0e/332c4536e8141aacec96463717fb3c4a298b70": "0d1d7fbaca76c545d0370c0b9dac4329",
".git/objects/0e/5478c0d31d6bd3d974ef48d0bfe819ad6668b0": "c747605931aeed99eba39862650b9380",
".git/objects/0f/0e0804fd31196612756741193fecbdfb5ffcdf": "8c310eb9978612b94b076325a4816d2b",
".git/objects/0f/2ed6e1db61c0c4f49e5c2093a4dcf2835edcf8": "f5f5611718c10fec945867c7a7555cfd",
".git/objects/0f/9085f425e3674c919d75bef81bcb3d62304cd7": "5428bbb7c31cf3aae8e12bd85aa38de0",
".git/objects/10/f83e718e3899cc69ea3e1540a8acc749b83057": "75f796b2b650a1a23ae53a0dc234e47b",
".git/objects/13/0e1afaeeff542c2599133c68580b60f2de42a3": "8f5e755a558ffc2ff8c1b9d627c05cf9",
".git/objects/14/37919486506b8cfa49627c26411e7f04389c89": "dc3446651127a1dfece3efec1b97edf7",
".git/objects/14/67931c5ec61233545d0e281e593dcf4c2bbb6b": "742fd083c7d50cc7a539ff29476b3f40",
".git/objects/15/38da4bd516f322def2ea77a0a14a363574a255": "7971dd5d1bed1e078d31381acf72dcc1",
".git/objects/16/13484695524be252cb089e1f633c91d2a47cb7": "48eb05a61e518eb93d17529fc0103d7d",
".git/objects/16/43d31f0386e317a1cfa6121133048adb408ab9": "bd3d19232cc23530f825d3d7117dfd14",
".git/objects/17/2d52ab176295ac9e034a24b7eb5862dc98bec0": "dd168b3dd3e3966ccba257765c14d40e",
".git/objects/17/95715bf384c10b83cab23f1b5de0ae224bb3c1": "09985e2a534d84a49516428347eb4c55",
".git/objects/17/ca492e4be85319e019db5268b35c8ec8562def": "2bf65e3ae6a8227f1f6b0044d7d69186",
".git/objects/18/3f913500c965e54e9504218678ad53ec8870fa": "dc548437ae157cff4082df494ea9e52a",
".git/objects/18/4001e2f4c5775312c91949ef7d0ec078cb11a7": "e4fd38be84a4dd04dec13d666b00c135",
".git/objects/19/20f786d8929a3668d7be62fb5ed0404d93cdc3": "76037a5495e963bb44b336e6e110fa30",
".git/objects/1a/3a9d13ca72803ecb5e2aef2c1b345d82c61fd8": "6052bace31b091a39e944b983f1105a7",
".git/objects/1a/423ef96bc9b88cae5ed8d8df3492a1cbf0be2a": "d644bd826acd7d7bae8c5209dab35da9",
".git/objects/1c/8485d900ab1f05c95a6a1df6e0658df95c4b31": "2cff1bfe783730929addf44623ed4554",
".git/objects/1d/1c09e359de509c8665a870de2aea5564b0f170": "5056767cf5bedf35f825e9d8b198b873",
".git/objects/1f/340a12db08310e08eafb259f11d902cfa1e4ef": "c75dd4143ba583f557f39fd2c9d1c5c9",
".git/objects/20/2b4b60f6d0054560290dd8e0667d29c5eb2d43": "de335d02222e26240f6c6cf7cd7966ba",
".git/objects/20/d4075da63811df88d78d04e9b0b12bccbf98c7": "aa87fc4925ba8b17a7a95309fc01a82b",
".git/objects/21/6fb3292bc32a5f101ae1df89240553bd9cb20a": "4db74132edb2bc608ba444b5b650f81a",
".git/objects/22/bf63b981316594d6d641d52326cc428cfb3384": "d301d6a8df8409175ed3107551149350",
".git/objects/22/df24a79678e02241342c2641991edc252d3390": "3c54c16a88b28929069332d8d7fd02e8",
".git/objects/23/8cea0835286627ec93592836e4a9f060e123fa": "2a2adfd30012fd07963af36bbffbe25b",
".git/objects/24/7cee8e4d5cec5cfd4ae1df03a7e13c3f4a5b5d": "a8092801dfab775431180f41ff36af2b",
".git/objects/24/b06ec0c091049633c18fd30bc88622dc24145f": "ecb74b23166b5c9d0879027e03a95283",
".git/objects/25/0064e33bd2da129ece1e07123f771653d756a1": "7f49acd24c231d4e54fc2a70dffbc6bd",
".git/objects/26/aa3a226bf545eeefca243e1a18c8f1d0d939ca": "e9d3e3f530e402653cdca28df23e9700",
".git/objects/27/cb516731e3c5a654a7e6e4c9a23f3b06d94031": "b3984924c4f6f4c6ca51d2e94fe63835",
".git/objects/28/ff8968cd85148bf7878e97ca3e12899346a5a4": "5329bbfd7da00d127123ce3da76c6f5c",
".git/objects/29/db8e20613912113906e1b2073b492e54fab0f0": "a27ad6d69a255fd3c5c588daef8f1817",
".git/objects/2a/51b463422a9bbbf70e7b4bb6d5dfdafd3e3eb4": "7de9fd9a691589a022db0f11030e9659",
".git/objects/2a/b084793348ba44b334d28e91055b6c965bbe6b": "90c2e15450b23d723ddcd49cd2771046",
".git/objects/2b/a3527fccb0b708e7884f273663413f35d6f061": "e761047efbad96b9de317e416b1f38ae",
".git/objects/2b/f3eb6bf8c30fe7777aa964dbb144e693561e94": "f2dc3cad3421c16f6fe10aa9fd81b772",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/2d/177c4e1e20ba37e2dd06610a1bf78bdc53a1ea": "f5e1b255a6a491ea3ba182160d2ca7ae",
".git/objects/2f/0a66ef56ab9de56d9f6b2edba1940b7f5269cc": "32da9488e0709e884bb35e8cf7b1f22f",
".git/objects/30/6dac5ed8d40c1a67b51105b2c459a386061bc3": "0a17491a92c8dee602194b7eabdb73a1",
".git/objects/31/69e8e99a576ce113c1a5ddabf5cec68d03563f": "3a460930083fc444b44709452e5376cf",
".git/objects/33/62c62dc6c81c91cc29a8defadcbf50f9e5c665": "25fd4e47743555ac31b4663868d63a3b",
".git/objects/33/a3479a43600125bb5b0feb69f73f25808aebd6": "f05943904201b22e73935e497d052c5c",
".git/objects/34/b2f4c60e3d27ab9dd8c9fdf5c587dd6298cf3f": "07f78a6242a41e1bf749893a735f3c49",
".git/objects/35/48352e6d7f9cb7f6cfa35c85a8ceaff91a6c14": "54d5d1829c0b78d198a41ae7b91b3e98",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/36/19b9f1f443a0c195530df10cee94f2995ba002": "938fb6891984fb24e071c25a37727aea",
".git/objects/37/6587bdb80a3786e64fd8cc470d07032c1ed53e": "a87de2f8b8f82dbdd20194ece4441d71",
".git/objects/38/b50c82fc083ce64be525bb673a8621634e63fc": "d42299f9ff678b652377fd4ee580b96d",
".git/objects/39/0a41f9298da56cbd23163c83ecc1ce96346a06": "0f4c9389598eb5df3e5631a1e40bab71",
".git/objects/3a/490e1c498e5dc32230d70fac27ffe34dbc721c": "01a0530bdec9f68f6ecae3b33ef87b35",
".git/objects/3a/60fc9f833046bc0b4b67372919f0c68f85f651": "00d540e6781da3b25b267bf2bf80f2cd",
".git/objects/3b/6014fc2977e640dec5d6ac27c4a5d415cb5554": "0e9317c7c179438e91762347370d7724",
".git/objects/3b/6246a82b48906e2de4b981798f0214b8b5b9cf": "12c483dda8821f4a31c0a33871199487",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/3c/4fd513c53f4ca006bdf09057c015151890dac0": "5a346417cd14f9f14315e12d50c2c935",
".git/objects/3c/b796cf4280cbade888c270fc3221c5bd270297": "c67d0e97f906cf0e3a9a62f4314dbf14",
".git/objects/3d/5e33b531553b7f4cb04d5343162e94d612b1a3": "f560c107dd9aa801b7e8370825d30f9f",
".git/objects/3f/4b6411c0279c8870c1a1b941598f359e5e0f95": "df0806bce6c34cb1b213d3e0f5be44c6",
".git/objects/3f/7b2f30f49a187310e780ea017f636bf4422ae6": "8b65d255d975c8b44699453aeece8b99",
".git/objects/41/9155ed17b2a306af372ece7324ed0d5ecccb42": "a6f3fd77ac8a5b6a3490b4a9a4331632",
".git/objects/42/129ed6399e5ce116b35ce78d212cbd7a2922f0": "b476c09c39ea37728657755f9416428a",
".git/objects/44/82a590235a8c198999236c4bfecddc1e157578": "761e854e2010d1db5e18c602f32aa3e1",
".git/objects/45/103b41d44e2dd267be2876233ede16ea547f96": "d92576a18aaa342f0d37668954b1b758",
".git/objects/45/4b84f6676443c37e4ddf35d86c90125edd4af5": "ec800493087c45140341d1c4a1f86298",
".git/objects/45/caa9b8b5687325bb45072cc3fbac0e83d591ba": "b21851b5eb728b23d5d29e98f9f33d90",
".git/objects/46/00411627d68b36815c0f0fdb04a3bc6ae39258": "ff1b9daaee9eba06747a57d7e79eec45",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/f64d61064c62026217d4a4f1e3f148a2b98169": "3651d8e44c95e17df0c1951dd1993717",
".git/objects/47/2263acffb01f7388b8b6fa98b488daa7a5ed40": "6ca3f80910be702941fff3f1609eb7f8",
".git/objects/47/4b3e8edaf132a0dae0b562abdaa34e612f0dd0": "54f0248ff661620bf3a3a2bc1bfac4e6",
".git/objects/48/3898315e078222a90875ab9052ef44b2a4490f": "8efcf1d854ca91f8bd7b4bd228bd10f3",
".git/objects/4a/99ec6a145dbed0e18a397ff69a5dabbee0ba29": "c9ad7d219b2465045fd206f88c5d7993",
".git/objects/4b/4c510447574baddcc454ff599b71812e0dffc7": "5897d41a95e244cb754c2e95d73c13a3",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4c/a2a7c226d2c3e26f0b9dde74214486d0baa896": "734657b1f27c72d07dd9e52a25c020c1",
".git/objects/4c/de2b321c082622575b6db9136efd2547810222": "67a0c47e98f5b649f3b610cc6d695d49",
".git/objects/4e/b3ae60fea5b2e06d1314c9ffb2a8d3bbcab703": "c745d6169afaaeb0a123d1cce043bb5a",
".git/objects/4f/16b3437b865bd931e7e1ef053f4bea963cdb93": "72898cbd69bbe76867f652e7297e398b",
".git/objects/4f/e461a3a179b6df49a772638436994c86c8c065": "a8ad6bae0d7688f1a7f58547e46bff1a",
".git/objects/50/1bec4e76f2677813ad744b52df05baca03344a": "67b19cd88ef9c86422df28ac3817fe87",
".git/objects/51/fcb2962779c4203fe5bcfbc3ba462ec234774c": "988a35e46c78854100cdcb752747aab6",
".git/objects/52/59e9a8b74e6650120a555b1f1a9ba9e722c137": "5e4baf888477eea5a200c46d771da872",
".git/objects/53/02338659e00b321e3a15c0284510cda2d5303c": "ff0e72e0c2cb5237bb35b8a14d265d00",
".git/objects/53/0267ffe73606f6ed8660b6a36bdbc38194090d": "59390eeeb8bcd41c1596d6a901786588",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/53/8408a4c8d8be9ab9627612f66bbda1d825e22f": "6bf5eb51c5d66f2ad524f19b502f7660",
".git/objects/56/752a7135201f9bbcb695ba0bba1b3d06ea8cf5": "1196f9580bd003548f91fe7d83238671",
".git/objects/56/c216cd5edcf93ea084b254948939290b998f54": "c9bd5681ad387fc2a79f0a5792d1d9ee",
".git/objects/5a/0c7944b3bd49434b4dde13822c545633680210": "5a21279e211db37854f9525966de36b4",
".git/objects/5a/6517736c642c5802ee3eb958989e84caea3152": "3e56896c81641b01817441217fcec3e1",
".git/objects/5a/71e8a3ab5687c1892aba0d6239c61c520dde31": "c683ef478513d5ee8cdcd45b58638363",
".git/objects/5b/11054077888448311fd59e8f57158a08f83130": "143c8989d0a08679d01a0066a995c8d1",
".git/objects/5b/5fbdeb607f0243b3cc9e3c0de4fd3b2330b118": "f1d6870781380ca0e9c725abe2ca7599",
".git/objects/5e/2384f120a90f4ed1e9393b57a2f8bc36eef4aa": "0df41e053be06082ac19e4f8cf550b84",
".git/objects/5f/5c20d9e84c5413f055929ec4f8ee8345e68584": "58ec4d9a03ac46ee8b7eda03a61602f9",
".git/objects/60/b0c7d7869cce4d90dbd0db57ce3bcc9e72433c": "d2b925ac032757a91df00ebbb09ed025",
".git/objects/64/3e2060bd8654504fb962cdd01eccd1c4fd136f": "c4d274a6bf88b340a4cb088a00529565",
".git/objects/64/c34f1fa42a003e9802a035f81260eaaa090438": "de0d7928dcf7efe80baaafd95ec92129",
".git/objects/64/f2a073c5d50652dc21246466b9265a0d4a1ff1": "b510bd66581ef2b274d6b97a34af5c77",
".git/objects/65/87b9e55296c257ae335d5872c748e542c45eec": "1222a1d94e77c94da12c45ebb73b8f44",
".git/objects/66/74ff76f7124a6d15091386f528a7a3a6dab4f2": "eaea8993c68ee7fbc105be3615b3536a",
".git/objects/66/e1efa62a9be1e6e4b901163538f6e7047948f6": "c3f28ce060b520056ba947f934b54362",
".git/objects/6e/82bec1849555eddf077534b00a95ae3bd31d47": "8f3ea437afae37d819505bc0ffa83e44",
".git/objects/6e/d5be88ccbfae50215d761145b23944b6b106e5": "944e802fb8a45d3cc6fcba27cdccf21a",
".git/objects/71/6330863a2f74b4c6e83ecfc203e6ba51d78f9e": "02edd0c3d1acc54dc89d388a73bd0c00",
".git/objects/72/55b9276701dadf7337a91de08263eaffe54781": "b7a6183828fc48a9076649c2ab662fb6",
".git/objects/72/baa60d7705d94d8577617a532512941c481023": "1243d87be4290438bac36ee43aea1b44",
".git/objects/74/cec7cb9235d5a7ebc3ea4c83995740cdebc957": "7f7b2febca07fcc8de40a7876e6bf0a8",
".git/objects/77/8ed30751eaa11c3da1a482db5db0358fc9d423": "695a82d12393b197a7419c59346544c9",
".git/objects/78/490ea1f11ccadf866d09e9019bf2e2dc70ba1b": "6443acfe85e3a6c554c912d6ff6117d4",
".git/objects/78/f18df2d01094c631776e96930859dbcf5678cf": "ec52b3c799f6b332549991f06a0a8ea0",
".git/objects/79/72fad802bf7cda95d0c75ed23855d876dc8083": "3d81dfa34a56c749dbe2dd033de8c053",
".git/objects/7a/974dec10a2e4b827a510feca5fd46c98dac389": "9bb732880b07e61cdf666f00f02dcd8c",
".git/objects/7a/ae7f2a3d2e482dcb03ae354f46bed7a63ad9c7": "1876ef30a49d5aa89ada6284e1afce9e",
".git/objects/7c/85ba25ffb9df7f17f10608bb98b1e94d3c6654": "bab4073f3d319511cfced00715a0606e",
".git/objects/7c/cc218a162e03b87dbcfc4a3db5377f847a2d1a": "c056e6f5fb12777d3ebe29edf62d4dd4",
".git/objects/7f/ece2f3c675f5ecd48cca89c2a1c7b3c540e825": "d97ee4bac8056aa808b2500251213de1",
".git/objects/80/3536542bc559d5f7201bc9710119300cac3b5f": "3f9665704b22e5786ee99e65879c8ced",
".git/objects/80/4fd72d3c86c9d9289b5a175817a3e4d14c955b": "5f0a5ce9a65342b6a921227d20aa6424",
".git/objects/82/1fde307acb295a98e2123ee9c91f8865079687": "a44ad0f824f5155135c02259cb67cc93",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/83/1200bd46fbdfeae1e68e6cf293915c32b6032f": "c6c128eba8163694b8dc7f3f7aaf1cc6",
".git/objects/83/f4c83f3d58f9443890b327e556a8ffbc02b168": "b0d41b6f55387950c44a2dc3e09fb213",
".git/objects/85/358cb29eda8cdc270794ed73b38a044b3491f9": "31570c166364935b5d523defc66689e9",
".git/objects/85/3eb4899f6603cea6829708d68c47f25504f740": "6fd4a1c1b3d9d2fed46f4f14f5dae2a6",
".git/objects/85/4247f8640d9532013fb9c51dc86437a7a9d2c6": "4d0d8e3b2f86aac26ff15e0b83f28783",
".git/objects/85/62bec003fe4c570bcfdc58e5e7ace3bf82acec": "c01168030af76bdd1f77a5de03641a85",
".git/objects/85/666896e7be7a77048e40a19b60c09d54571b52": "d3117371e5bfb54cd6c0a70862b797cb",
".git/objects/86/9422a1fed4a0bf975681799072f48956893943": "8ef0b3be5774718c6fdcd19954a85480",
".git/objects/87/bd8dfdf8c75eced94314383e4aeabc5243d4c3": "72fd666f29cca1f438dcc356ae48c482",
".git/objects/87/e8dc8cbf18d2b781462cb594ccb6eb33bfd368": "5b7412c415616e8ad52579072ed39a33",
".git/objects/88/18cf613bf54ddaddf28d0c370af7f33e31c76d": "376152234b3c8b1c352a4a218fe243f8",
".git/objects/89/3a0a32cec311af94bd3599e810ecdf1648d63a": "d4bba29221c97dc8f5bf24550804b30c",
".git/objects/89/caf32e130d283c54e5abba18918aa31388740d": "27c19b067b45c1767b09206e8128d320",
".git/objects/8c/001d514bff64fd9d8ca86cf2aaba056e9dbda4": "888d700a3c8ba56b1df50b4ad8bb8cde",
".git/objects/8c/e09f39a97f6233cb9fc4832c8b721d1277720a": "7c45e81ecb267c2931195530e696a8dc",
".git/objects/8d/c342147e6bddb6797385c3edd4462646530ec5": "d86799c40b1faf2000827044606f2e99",
".git/objects/90/21fc1bc6dd8b5f81a785d66aee53d5a0863a4d": "fae7bb988ffc6649efe83e2eb3a1a632",
".git/objects/91/11a3a8529d50f595c1f70782d40665b4f7d966": "382cc38ce05eb9a1b75df8daccdb74e9",
".git/objects/91/db13fbae1579bc9b2c3bf496625bb3d37adee5": "027fc791620def8ba386903a39a09e60",
".git/objects/92/90402956d3a29ac4a44594625d8cc7443dcbf2": "f5c46aacafca423affaa994ce4797a3d",
".git/objects/93/9c759fec0e06a404b626967015a12bc3c876e0": "ebaf1d3fdc3b1c109ec7c8a054d12ea3",
".git/objects/94/1b9a1e991eb5eb5067c3e7976ba8e9866d056d": "9fea404ebf1bad24913ed4af5218128f",
".git/objects/95/b3a6a086416e2102ba29f4440b3638b71df282": "c58e679fa0b69ce9d8f654240a9bad5d",
".git/objects/96/32d97d579529a6de28f6e9af7004bec5b5b88b": "a1cf950792bb261274d4168532cd6bbf",
".git/objects/96/5f268e91b7f468ea4ded85a8f2abcddfe1f5a9": "6cde620475753acf951a3fbb6b42aca1",
".git/objects/97/3f1a635b80f671d9acceb79930d4f857ae1bb6": "1f8abc806375c0a3f3330c22e7031e5b",
".git/objects/99/a3520f4f5fc995790ea9af423e75f8a4b84980": "538b74def6a10be6bc802c1ea67806cd",
".git/objects/99/b326f72d6c7774dc956b6cd6a366d1523a30de": "850b02ae50e28a2556af63d201608b92",
".git/objects/99/f03f6f5c18c2786ab5157b6e16d4289d1cf271": "de48473213fcf9c25ff3881982590421",
".git/objects/9b/ad7e2db4064384d0bbf434d3b08fa9a19da2cf": "ce0d3e4687228596cf5d95f1e007b27e",
".git/objects/9c/b946057afa19655262607c873b155fd98104f9": "44ec6140223f55e5afbbd46e4b52b515",
".git/objects/9e/540336905970c4d3d1c75c8440af6a36f09e86": "3d6c8e31891db2a1de28c3acf2d5ed39",
".git/objects/9e/ca19873f945cd1b1faacb7ec26a7a5c7e1f59c": "79af11b02a522bbf347f85c257762c8d",
".git/objects/9f/ef87196fd90b065abc73ad006b56612178b9dc": "35070cfefb4b2a64e219be46481492b1",
".git/objects/a2/1baaf34a2401566f0754c16055bfa386f8857d": "49f7a6474c27280d89b08694beecdd9b",
".git/objects/a2/46411f5200ed6b91add62b554affe8621cea38": "49e461b127fafe37b5a5e8afc10ee435",
".git/objects/a3/45ffd2244ddfcb8e5991bacf0df1914986631f": "587f19177f46e27f528f5bef0719fc1d",
".git/objects/a4/660068f70b47881b24f707876740ecb31f221f": "09e8b9a5d9fae251a138dbbe2cb0482f",
".git/objects/a5/38389542e1ce0a87d5580408059e0809a1abf2": "21c2146a791f2770c9c827fb76d324de",
".git/objects/a6/7528497166a48917dbf8cede1492a75e758f56": "6e44b22a83a5f6b4b5ba26c3f00816cc",
".git/objects/a8/12dd1140b122c37f1eed24999df3e85565e9c3": "ecc8410814f73d1dde9caaf7cddf2648",
".git/objects/a8/1b0490affcc31f8c866160d0fe5310c09ff46a": "8bd9f9d1bae6471a94c90970cd97d3e2",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/a9/cb196351c37512f530bc6a710e2802dd161b3a": "20f500075b5cf81557ab383beb6b0ef3",
".git/objects/a9/df78e7c4cdb5cfcad90ef823964edd9ba57ad0": "a97b8553269eeb2b12ae9fe1a58693cd",
".git/objects/aa/73c8e61cc0bc43d10376d468acbf418ffb1be1": "4547c4ff70c739180e6f7332594be443",
".git/objects/ac/45f38003dd82c27838bf445861d1f2506970dc": "c5bbaf2ce8fbb8c085925b8b318bb6b1",
".git/objects/ac/62d98eb57af0e67dfd1eeae33cb0f29c082f0d": "9a96a139c7a85b7959d8815e2a35b632",
".git/objects/af/e0bcb68349a356a5b4e6f0b302d45cc5592294": "f3bdb39372a8bc52165aca6652261d28",
".git/objects/b1/b56dca188bf02ed4a1bcc30b469104498dcf98": "74e97e09cfcac04567b1f0d3014a733a",
".git/objects/b2/ce971fa219e94715dc95878c03bb74e987ed90": "268fac2a26e09b336a5ca91dce556121",
".git/objects/b2/dc1da6301524b8f9b778323d0df065e70edab1": "68aad1b629c2669b860d3a751bb985af",
".git/objects/b6/d8418b0effac24e51bd017b3f56ebd87b37871": "dd2d39dceee7129469a07ef656ba399e",
".git/objects/b7/5ae5578c0b1ef86e4152a973d72577049b2c17": "a89f618b1ebd7cb87b14d83d24e5facc",
".git/objects/b8/3dd4524a0fef2094b626fd72e6f7dae2c1924a": "2b6af157519d15e29081d20795adf794",
".git/objects/b9/3c93d465af25057d6cf9781ad61a46211ad8cc": "4b864b3a829ef62fe9cbf16b5ec4b2d9",
".git/objects/b9/a0a3149040471a4919b77598b5df241b4439ad": "bb420bd6dc83fd788ea06c0bf7ae75ba",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bc/acd5f823fc633b1714d73cb256deabb60ad275": "5d9afe58b3dd1a6c31bc18ce65279d12",
".git/objects/bd/f909b6c7a88554c5d29fb7df0a31e34d4851c8": "cea515c6f583ef2e1665bb59de53a2a4",
".git/objects/bf/d4d943f05909618b32b95d9f755188448f8cb7": "b1bb83f85cdd25d580d2a652050eb925",
".git/objects/bf/f67f5714fd1242e5594d9d9e7c60fb92c8dd4d": "1c839b5ed1d196cb2796e37eb5531da9",
".git/objects/c5/cc2c2bc4ff05f148a04aa13a0aef02de1b99a9": "ce72ed10bcf834f67c70771f328cb2af",
".git/objects/c6/0f4988ce328900e0d01ba306db360d3712361c": "54175cf54ff3e86188cd12aeed2b065d",
".git/objects/c6/95fa051d527ae08d427a61fb9f4578f61ce6fa": "2920d81c167a23754a86bc58ecc42420",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/c7/7f7969a420017c30cd5f6ff6531a81b3c4a7ff": "54c1e50e2d10f491b7e8bd6594e65326",
".git/objects/c9/eb1cce9ac5b1d054112525087104fd604047dd": "68c43f0708ef7013b05a980102c2a7ce",
".git/objects/cd/2453947a8c5f5a44157f31963d13a110f4df60": "072ce071389771c6c37fcb33ae176538",
".git/objects/cd/91b0eba68d4f236bb8eaf3452dd46ab200ed6e": "b8b0f8d1062eaa80edb8baf1e6499415",
".git/objects/cd/b3aa909b6fb40112cdc1a41727960eccd3f458": "a1d461b2d8b158c28ed0076dfec61663",
".git/objects/cd/d55a70fbe3ca5fc6354d1b8ab6aa629380b061": "c3e9c415ef3a015e13433bcfb913e38e",
".git/objects/ce/61c2a0f4fea57427b2ff2b821522f5b7398763": "79a3d64e67c7e8cd352fa66d6d27739a",
".git/objects/cf/bf18ebc6bca7f3deb83651de46b5982765462b": "6a448a4fed46bb2a8fb26201d05b2fcc",
".git/objects/d1/07d29f1ba405b2d9e992cd2c04877227b00027": "82cd860e9127988a93f29a3723c4812c",
".git/objects/d3/0f215c1b2b067af0e5bea12d8118108af5667e": "a26f9fac0fb7cc81fecf16c201bb350f",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d4/a92cc421114349bf6ec9f41ed5467defacdf77": "24e581c1b9b2cd1cf02ab7f896fc4030",
".git/objects/d4/c4a9f40714c743da48e2005c7b653cfab977b8": "b1cd6a72bf35069b24f2eaa408e466ff",
".git/objects/d5/1da72026508e3fb812499dabc19bb9518b1585": "aaa672da062272466ec79d28ac594ce4",
".git/objects/d5/580aab0f87edfe4c447f1e44efa1abc9f2c554": "75c5361892510217b56207ac802a7244",
".git/objects/d5/590cfb1351c600c1401156999c244792e66429": "b20eb5d54d00efcdb2e126551aa6a3cd",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d5/b576a6eb1c1028f5ea9ea1878facd62263ca3a": "9169f0c53d2bdfceff5aeb99a2a2321b",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d7/b71a2083d36429c288e840b860a20f515032bb": "3be4fbe8955815c6e5836b95d9cfd93f",
".git/objects/d7/c867dc36366177548d493479ecc4fdcd09f5d6": "3cd4d8cffb998386e65776363dee283c",
".git/objects/d7/e1d771cd9254b36bd4f3d544e3758f08532171": "d2fd28c78b14e4c5b9ecb3aac3ddbe96",
".git/objects/d8/2f50316865c2b62d8e4d9bf12067deffa68102": "40c34cd93c754a6162601c107bcd7986",
".git/objects/da/a2f4dfe1daffb6f27cbe487ba486f10e2619a0": "987ff0a6e3dcd5f9246738417b83ea0c",
".git/objects/db/7030c16be331070c85d943a5583a4ea7d403fb": "6a0be7a6c628d75e86313e415bce2418",
".git/objects/db/b04e50f67d84f38195e97ccf9001407098bb5c": "bad48f9d0a29804b75e48dc45238b3dd",
".git/objects/dc/0d98e2b47717cce54abac1efae095f04840f0a": "335db8227320292e7d3a3f4c9061ec27",
".git/objects/de/00d572ef05383a0d750ba5ba6c4819f890b923": "3de272a999bdf8242df43b1641014af6",
".git/objects/df/80f2d5f30a1e2a05f43d6f152e7f946f07a339": "3af5e3d67f92b21e71ffce21109de3ba",
".git/objects/df/f4d00874fe9529a334acd14ed81024ab012ae3": "0886acdaa6536676e1fcb5f82c1eb917",
".git/objects/e1/a21ab45c15f3cf06309f612c1e68cf99932e75": "5a73dd74502ccaf349137b3acf7f1ad1",
".git/objects/e2/26bc2ceb7ce8aa2da8e232d460ec7aae1f5873": "1963aeb6e479a7ed14c6436d510eb533",
".git/objects/e4/128ea213f98c7228d87a2ca158d2a8a54e54ca": "006594179c888e1907fe7f4fec856440",
".git/objects/e5/6e50f6f3aafb06ec84cd9c425db530a8d2f189": "49b824cfcc56cdfb2142ca60f854391c",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e7/6099ae7f545c0e5fa449b148af2499ea522f8e": "7e3567743896e0df49fc76e3dc70cb1f",
".git/objects/e7/cc605b1113d128fa9a329ebf5cda281a80ea7f": "6a144b3f45a7749a68840e07944e3bf7",
".git/objects/e8/55dc987b0db3ccd24a8869a087233a0e124f27": "9b242467f4dfe05ce7d2727a68a1ea66",
".git/objects/e9/0f4f3fe2407ec586466410eecaa3042840bfca": "ce8d46f9580824689f31d141e5f5d17a",
".git/objects/e9/20b2e7bfbfe5503c7855cefe4603daff7f4f32": "72fc16745edfc12acaf69a5c5b1a0cd7",
".git/objects/e9/e2f8fb356b952bef008959ccae33884cbca89f": "a19c1e681e0ac68e17060eb3efaca8f3",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/f79c994a2ba9aca01b46930b1665145856d1cf": "a3bc4edd6026a9adef93763d4924d1b7",
".git/objects/f1/26b8282cadd4a054e0567f47abc12f99f89972": "2470f4e7d950f1ef345d3d6e41890764",
".git/objects/f1/9da2559c8b3ca441cb38e978ebd0505a6c36b1": "83cf1a3115b73858c6c583f3d81b67a2",
".git/objects/f2/24f62ea8f78f76e3ec92b7bf56775ccbf7a4fa": "805270570dd6040826e0cb24bdd8aac9",
".git/objects/f2/c48b66c88ede07f8df87d9af6b9a0d29a59a49": "d5588d81daede877447dff32952f2273",
".git/objects/f3/caf824ff5c6d2795b677a84b6cc6b6ce3567bd": "62d3df34fdf54707ccae529880abeff0",
".git/objects/f4/915e4af16f25df8983f6fd88d27bf5259ab915": "c8d4065c12f295aeb95d5a2d9bf79318",
".git/objects/f5/4eb2b0532ea6c412cdec1353716b5510134574": "7c166bfcb2ec8d0c6f58b36e5581d3f1",
".git/objects/f6/040eafff3925ab7f7b367041bea2963338f53e": "2e18758bc24978245cfc3f9f7a26868d",
".git/objects/f6/041e57721400548413464eb66dff546c4d1cd2": "b65953d75d375cc790411c2efe9e177e",
".git/objects/f8/2104776895a3a177f65fd36ab212f7433038d3": "f78d7eae724d1528bdf93e30f791f17a",
".git/objects/f8/4ee47438c81320ce146e0a7231b220e3e7ffa6": "c914a36c60e9d62dfd1452f5a71c100d",
".git/objects/fa/ae27c73e64a77f2bbf9e34649a58fb2de35bc4": "ad7cf29382406c134de7d1ad40009bc2",
".git/objects/fb/0006e6a3ab84da47e96d631a8ae0d81e3cffc0": "a1c61c40f3e215f79aed1aae0893cc74",
".git/objects/fb/0eb384ac683917084ff563797dc0e180c151be": "2ea88b7d8db8497f4cd9ed5251e2e23d",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/fd/e2eb46eeb264a17ac295f42baa7dfd3e4acbe8": "2b512140d2ec6a012ea620a3f13021b2",
".git/objects/fd/e525f0ec9a8acb6f6404461ae262955d0346a0": "6640f8b520165ebdd7bb5fb8b4f46b4b",
".git/objects/ff/20a20a60b43063d8751b5da57670210804453a": "1274c234e0e18c7c0725aeb0fbcd8a8a",
".git/ORIG_HEAD": "8aa2c517f587649aab9ffec0198f13ef",
".git/refs/heads/main": "148b7b1d05deb2873655ba284d86fa6e",
".git/refs/remotes/origin/main": "148b7b1d05deb2873655ba284d86fa6e",
"assets/AssetManifest.bin": "e83e6c13d459acc9022fd94b71b3e852",
"assets/AssetManifest.bin.json": "7fa405e123a4e2d9238601e8b365207b",
"assets/AssetManifest.json": "a32b43cf37b2f8fd7d561811c3c9e4be",
"assets/assets/account_icon.png": "29479ba0435741580ca9f4a467be6207",
"assets/assets/add_white_icon.png": "ca9749263807fb890410905009ea586e",
"assets/assets/back_white_icon.png": "67a5bd706584ace07aad14ddf269992f",
"assets/assets/camera_icon.png": "33984f0debe7281b72d75baa8195132d",
"assets/assets/clock_icon.png": "fbb2310c6403bbeeaff0047d9097365f",
"assets/assets/clock_in_icon.png": "fbb2310c6403bbeeaff0047d9097365f",
"assets/assets/club_members_icon.png": "fc64a2ed0170a4dae9860575953736df",
"assets/assets/copy_icon.png": "71ba20ec298c6737abe27c80cfbc9b4a",
"assets/assets/create_icon_black.png": "2a1c72ff0f3a681eb93a3cf67991e99c",
"assets/assets/edit_member_icon.png": "0984ce78f88886e9064167f8caef6320",
"assets/assets/emptybox_icon.png": "ac637a591d8d4ab26e600917fab242dc",
"assets/assets/encoder_icon.png": "a275517783a6de1993f7d6d071330267",
"assets/assets/firebase_logo.png": "cbba441819dedfd0d32e7ba009faee5e",
"assets/assets/gallery_icon.png": "3682496b6bb48ca7d64242a08157019f",
"assets/assets/hidden_eye_icon.png": "03ecf7e6e43fcff15c912ee223cd4931",
"assets/assets/key_icon.png": "fbc58eb206564dbd8f9f61c28a06f867",
"assets/assets/list_icon.png": "0b721e533aedc38aa39530818148fc99",
"assets/assets/location_icon.png": "cd4aff5d0037488d39e079b23fd2ec9a",
"assets/assets/location_white_icon.png": "4f1c677f31b32c2fcb76a956093a177d",
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
"assets/assets/show_eye_icon.png": "176d82aa8ca7d7def3f24f045f99646d",
"assets/assets/success_icon.png": "2d1ca6db06297c167a206d40d4d20b45",
"assets/assets/terms_icon.png": "ff29a57700ab3a4f7f0df0b028d2b035",
"assets/assets/tournament_category_white_icon.png": "ded05b1f2087c610e46cb307bdba9c6a",
"assets/assets/tournament_event_white_icon.png": "e670dcef623aab80e946c7c55fab1b82",
"assets/assets/transfer_icon.png": "bf0232dc032a1d8550f72dc10e5ffa18",
"assets/assets/trash_icon.png": "1cf691ccce511a1ee0cbf49ddeba0e67",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "80189d3b5412f7cdd61ca5f300688d8c",
"assets/NOTICES": "61ef587c4c72f36814f1075f9a0c023f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/fluttertoast/assets/toastify.css": "910ddaaf9712a0b0392cf7975a3b7fb5",
"assets/packages/fluttertoast/assets/toastify.js": "18cfdd77033aa55d215e8a78c090ba89",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "64edb91684bdb3b879812ba2e48dd487",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "f87e541501c96012c252942b6b75d1ea",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "4124c42a73efa7eb886d3400a1ed7a06",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.ico": "95460dacf9dc5397725244c209085453",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "f53fdad3c2d8632e2b9b81453d3757ee",
"icons/Icon-512.png": "c41191a8818ddbab8f1714478240d4d5",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "7b86d4fc18b1563e1594e73533f8095e",
"/": "7b86d4fc18b1563e1594e73533f8095e",
"main.dart.js": "af8699a69979ae00426272e404a6056a",
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
