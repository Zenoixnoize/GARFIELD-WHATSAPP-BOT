/*COPYRIGHT (C) 2022 CODED BY NOIZE */

const Asena = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const ffmpeg = require('fluent-ffmpeg');
const {execFile} = require('child_process');
const cwebp = require('cwebp-bin');
const AurorasX = require('aurora-npm')
const request = require('request');

const Language = require('../language');
const Lang = Language.getString('ttp');

var description = ''
var cmd = ''
var cmd_desc = ''
if (Config.LANG == 'TR') description = 'Tüm ttp komutlarını gösterir.', cmd = '*Komut:* ', cmd_desc = '*Açıklama:* '
if (Config.LANG == 'AZ') description = 'Bütün ttp əmrlərini göstərir.', cmd = '*Əmr:* ', cmd_desc = '*İzahat:* '
if (Config.LANG == 'EN') description = 'Shows all ttp commands.', cmd = '*Command:* ', cmd_desc = '*Description:* '
if (Config.LANG == 'RU') description = 'Показывает все команды ttp.', cmd = '*Команда:* ', cmd_desc = '*Объяснение:* '
if (Config.LANG == 'ES') description = 'Muestra todos los comandos ttp.', cmd = '*Mando:* ', cmd_desc = '*Explicación:* '
if (Config.LANG == 'HI') description = 'सभी ttp कमांड दिखाता है।', cmd = '*आदेश:* ', cmd_desc = '*व्याख्या:* '
if (Config.LANG == 'ML') description = 'എല്ലാ ttp കമാൻഡുകളും കാണിക്കുന്നു.', cmd = '*കമാൻഡ്:* ', cmd_desc = '*വിശദീകരണം:* '
if (Config.LANG == 'PT') description = 'Mostra todos os comandos ttp.', cmd = '*Comando:* ', cmd_desc = '*Explicação:* '
if (Config.LANG == 'ID') description = '*Menampilkan semua perintah ttp.', cmd = '*Memerintah:* ', cmd_desc = '*Penjelasan:* '
if (Config.WORKTYPE == 'public')
    Garfield.addXnodes({ pattern: 'ttp ?(.*)',fromMe: false, dontAddCommandList: true }, (async (message, match) => {
  if (message.reply_message) {
    var text = message.reply_message.text
    var uri = encodeURI(text)
    var ttinullimage = await axios.get('https://api.xteam.xyz/ttp?file&text=' + uri, { responseType: 'arraybuffer' })
    await message.client.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.png, caption: ' ```Follow Us Facebook - https://www.facebook.com/garfieldbots/``` ' })
  } else {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD, MessageType.text);
    var uri = encodeURI(match[1])
    var ttinullimage = await axios.get('https://api.xteam.xyz/ttp?file&text=' + uri, { responseType: 'arraybuffer' })
    await message.client.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.png, caption: ' ```Follow Us Facebook - https://www.facebook.com/garfieldbots/``` ' })
  }
}));
if (Config.WORKTYPE == 'public')
    Garfield.addXnodes({ pattern: 'attp ?(.*)',fromMe: false, dontAddCommandList: true }, (async (message, match) => {
  if (message.reply_message) {
    var text = message.reply_message.text
    var uri = encodeURI(text)
    var ttinullimage = await axios.get('https://api.xteam.xyz/attp?file&text=' + uri, { responseType: 'arraybuffer' })
    await message.client.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.sticker, { mimetype: Mimetype.webp })
  } else {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD, MessageType.text);
    var uri = encodeURI(match[1])
    var ttinullimage = await axios.get('https://api.xteam.xyz/attp?file&text=' + uri, { responseType: 'arraybuffer' })
    await message.client.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.sticker, { mimetype: Mimetype.webp })
  }
}));
if (Config.WORKTYPE == 'public')
    Garfield.addXnodes({ pattern: 'wttp ?(.*)',fromMe: false, dontAddCommandList: true }, (async (message, match) => {
  if (message.reply_message) {
    var text = message.reply_message.text
    var ttinullimage = await AurorasX.ttp(text, 'https://api.flamingtext.com/logo/Design-Water?_variations=true&text=', '&_loc=catdynamic')
    var download = async(uri, filename, callback) => {
      await request.head(uri, async(err, res, body) => {    
        await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
      });
    };
    await download(ttinullimage.image, '/root/GARFIELD-6.0/wttp.png', async() => { 
      ffmpeg('/root/GARFIELD-6.0/wttp.png').videoFilters('chromakey=white').save('af.png').on('end', async () => {
        ffmpeg('/root/GARFIELD-6.0/af.png').outputOptions(["-y", "-vcodec libwebp"]).videoFilters('scale=2000:2000:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=2000:2000:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1').save('st.webp').on('end', async () => {
          await message.sendMessage(fs.readFileSync('st.webp'), MessageType.sticker);
        })
      })
    })
  } else {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD, MessageType.text);
    var ttinullimage = await AurorasX.ttp(match[1], 'https://api.flamingtext.com/logo/Design-Water?_variations=true&text=', '&_loc=catdynamic')
    var download = async(uri, filename, callback) => {
      await request.head(uri, async(err, res, body) => {    
        await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
      });
    };
    await download(ttinullimage.image, '/root/GARFIELD-6.0/wttp.png', async() => { 
      ffmpeg('/root/GARFIELD-6.0/wttp.png').videoFilters('chromakey=white').save('af.png').on('end', async () => {
        ffmpeg('/root/GARFIELD-6.0/af.png').outputOptions(["-y", "-vcodec libwebp"]).videoFilters('scale=2000:2000:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=2000:2000:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1').save('st.webp').on('end', async () => {
          await message.sendMessage(fs.readFileSync('st.webp'), MessageType.sticker);
        })
      })
    })
  }
}));
if (Config.WORKTYPE == 'public')
    Garfield.addXnodes({ pattern: 'http ?(.*)',fromMe: false, dontAddCommandList: true }, (async (message, match) => {
  if (message.reply_message) {
    var text = message.reply_message.text
    var ttinullimage = await AurorasX.ttp(text, 'https://api.flamingtext.com/logo/Design-Style?_variations=true&text=', '&_loc=catdynamic')
    var download = async(uri, filename, callback) => {
      await request.head(uri, async(err, res, body) => {    
        await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
      });
    };
    await download(ttinullimage.image, '/root/GARFIELD-6.0/http.png', async() => { 
      ffmpeg('/root/GARFIELD-6.0/http.png').videoFilters('chromakey=white').save('af.png').on('end', async () => {
        ffmpeg('/root/GARFIELD-6.0/af.png').outputOptions(["-y", "-vcodec libwebp"]).videoFilters('scale=2000:2000:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=2000:2000:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1').save('st.webp').on('end', async () => {
          await message.sendMessage(fs.readFileSync('st.webp'), MessageType.sticker);
        })
      })
    })
  } else {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD, MessageType.text);
    var ttinullimage = await AurorasX.ttp(match[1], 'https://api.flamingtext.com/logo/Design-Style?_variations=true&text=', '&_loc=catdynamic')
    var download = async(uri, filename, callback) => {
      await request.head(uri, async(err, res, body) => {    
        await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
      });
    };
    await download(ttinullimage.image, '/root/GARFIELD-6.0/http.png', async() => { 
      ffmpeg('/root/GARFIELD-6.0/http.png').videoFilters('chromakey=white').save('af.png').on('end', async () => {
        ffmpeg('/root/GARFIELD-6.0/af.png').outputOptions(["-y", "-vcodec libwebp"]).videoFilters('scale=2000:2000:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=2000:2000:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1').save('st.webp').on('end', async () => {
          await message.sendMessage(fs.readFileSync('st.webp'), MessageType.sticker);
        })
      })
    })
  }
}));
if (Config.WORKTYPE == 'public')
    Garfield.addXnodes({ pattern: 'bttp ?(.*)',fromMe: false, dontAddCommandList: true }, (async (message, match) => {
  if (message.reply_message) {
    var text = message.reply_message.text
    var ttinullimage = await AurorasX.ttp(text, 'https://api.flamingtext.com/logo/Design-Blackbird?_variations=true&text=', '&_loc=catdynamic')
    var download = async(uri, filename, callback) => {
      await request.head(uri, async(err, res, body) => {    
        await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
      });
    };
    await download(ttinullimage.image, '/root/GARFIELD-6.0/bttp.png', async() => { 
      ffmpeg('/root/GARFIELD-6.0/bttp.png').videoFilters('chromakey=white').save('af.png').on('end', async () => {
        ffmpeg('/root/GARFIELD-6.0/af.png').outputOptions(["-y", "-vcodec libwebp"]).videoFilters('scale=2000:2000:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=2000:2000:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1').save('st.webp').on('end', async () => {
          await message.sendMessage(fs.readFileSync('st.webp'), MessageType.sticker);
        })
      })
    })
  } else {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD, MessageType.text);
    var ttinullimage = await AurorasX.ttp(match[1], 'https://api.flamingtext.com/logo/Design-Blackbird?_variations=true&text=', '&_loc=catdynamic')
    var download = async(uri, filename, callback) => {
      await request.head(uri, async(err, res, body) => {    
        await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
      });
    };
    await download(ttinullimage.image, '/root/GARFIELD-6.0/bttp.png', async() => { 
      ffmpeg('/root/GARFIELD-6.0/bttp.png').videoFilters('chromakey=white').save('af.png').on('end', async () => {
        ffmpeg('/root/GARFIELD-6.0/af.png').outputOptions(["-y", "-vcodec libwebp"]).videoFilters('scale=2000:2000:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=2000:2000:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1').save('st.webp').on('end', async () => {
          await message.sendMessage(fs.readFileSync('st.webp'), MessageType.sticker);
        })
      })
    })
  }
}));
if (Config.WORKTYPE == 'public')
    Garfield.addXnodes({ pattern: 'gttp ?(.*)',fromMe: false, dontAddCommandList: true }, (async (message, match) => {
  if (message.reply_message) {
    var text = message.reply_message.text
    var ttinullimage = await AurorasX.ttp(text, 'https://api.flamingtext.com/logo/Design-Fluffy?_variations=true&text=', '&_loc=catdynamic')
    var download = async(uri, filename, callback) => {
      await request.head(uri, async(err, res, body) => {    
        await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
      });
    };
    await download(ttinullimage.image, '/root/GARFIELD-6.0/gttp.png', async() => { 
      ffmpeg('/root/GARFIELD-6.0/gttp.png').videoFilters('chromakey=white').save('af.png').on('end', async () => {
        ffmpeg('/root/GARFIELD-6.0/af.png').outputOptions(["-y", "-vcodec libwebp"]).videoFilters('scale=2000:2000:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=2000:2000:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1').save('st.webp').on('end', async () => {
          await message.sendMessage(fs.readFileSync('st.webp'), MessageType.sticker);
        })
      })
    })
  } else {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD, MessageType.text);
    var ttinullimage = await AurorasX.ttp(match[1], 'https://api.flamingtext.com/logo/Design-Fluffy?_variations=true&text=', '&_loc=catdynamic')
    var download = async(uri, filename, callback) => {
      await request.head(uri, async(err, res, body) => {    
        await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
      });
    };
    await download(ttinullimage.image, '/root/GARFIELD-6.0/gttp.png', async() => { 
      ffmpeg('/root/GARFIELD-6.0/gttp.png').videoFilters('chromakey=white').save('af.png').on('end', async () => {
        ffmpeg('/root/GARFIELD-6.0/af.png').outputOptions(["-y", "-vcodec libwebp"]).videoFilters('scale=2000:2000:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=2000:2000:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1').save('st.webp').on('end', async () => {
          await message.sendMessage(fs.readFileSync('st.webp'), MessageType.sticker);
        })
      })
    })
  }
}));
if (Config.WORKTYPE == 'public')
    Garfield.addXnodes({ pattern: 'sttp ?(.*)',fromMe: false, dontAddCommandList: true }, (async (message, match) => {
  if (message.reply_message) {
    var text = message.reply_message.text
    var ttinullimage = await AurorasX.ttp(text, 'https://api.flamingtext.com/logo/Design-Smurfs?_variations=true&text=', '&_loc=catdynamic')
    var download = async(uri, filename, callback) => {
      await request.head(uri, async(err, res, body) => {    
        await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
      });
    };
    await download(ttinullimage.image, '/root/GARFIELD-6.0/sttp.png', async() => { 
      ffmpeg('/root/GARFIELD-6.0/sttp.png').videoFilters('chromakey=white').save('af.png').on('end', async () => {
        ffmpeg('/root/GARFIELD-6.0/af.png').outputOptions(["-y", "-vcodec libwebp"]).videoFilters('scale=2000:2000:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=2000:2000:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1').save('st.webp').on('end', async () => {
          await message.sendMessage(fs.readFileSync('st.webp'), MessageType.sticker);
        })
      })
    })
  } else {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD, MessageType.text);
    var ttinullimage = await AurorasX.ttp(match[1], 'https://api.flamingtext.com/logo/Design-Smurfs?_variations=true&text=', '&_loc=catdynamic')
    var download = async(uri, filename, callback) => {
      await request.head(uri, async(err, res, body) => {    
        await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
      });
    };
    await download(ttinullimage.image, '/root/GARFIELD-6.0/sttp.png', async() => { 
      ffmpeg('/root/GARFIELD-6.0/sttp.png').videoFilters('chromakey=white').save('af.png').on('end', async () => {
        ffmpeg('/root/GARFIELD-6.0/af.png').outputOptions(["-y", "-vcodec libwebp"]).videoFilters('scale=2000:2000:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=2000:2000:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1').save('st.webp').on('end', async () => {
          await message.sendMessage(fs.readFileSync('st.webp'), MessageType.sticker);
        })
      })
    })
  }
}));
if (Config.WORKTYPE == 'public')
    Garfield.addXnodes({ pattern: 'ettp ?(.*)',fromMe: false, dontAddCommandList: true }, (async (message, match) => {
  if (message.reply_message) {
    var text = message.reply_message.text
    var ttinullimage = await AurorasX.ttp(text, 'https://api.flamingtext.com/logo/Design-Electric?_variations=true&text=', '&_loc=catdynamic')
    var download = async(uri, filename, callback) => {
      await request.head(uri, async(err, res, body) => {    
        await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
      });
    };
    await download(ttinullimage.image, '/root/GARFIELD-6.0/ettp.png', async() => { 
      ffmpeg('/root/GARFIELD-6.0/ettp.png').videoFilters('chromakey=#FFFFFF:similarity=0.01').save('af.png').on('end', async () => {
        ffmpeg('/root/GARFIELD-6.0/af.png').outputOptions(["-y", "-vcodec libwebp"]).videoFilters('scale=2000:2000:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=2000:2000:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1').save('st.webp').on('end', async () => {
          await message.sendMessage(fs.readFileSync('st.webp'), MessageType.sticker);
        })
      })
    })
  } else {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD, MessageType.text);
    var ttinullimage = await AurorasX.ttp(match[1], 'https://api.flamingtext.com/logo/Design-Electric?_variations=true&text=', '&_loc=catdynamic')
    var download = async(uri, filename, callback) => {
      await request.head(uri, async(err, res, body) => {    
        await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
      });
    };
    await download(ttinullimage.image, '/root/GARFIELD-6.0/ettp.png', async() => { 
      ffmpeg('/root/GARFIELD-6.0/ettp.png').videoFilters('chromakey=#FFFFFF:similarity=0.01').save('af.png').on('end', async () => {
        ffmpeg('/root/GARFIELD-6.0/af.png').outputOptions(["-y", "-vcodec libwebp"]).videoFilters('scale=2000:2000:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=2000:2000:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1').save('st.webp').on('end', async () => {
          await message.sendMessage(fs.readFileSync('st.webp'), MessageType.sticker);
        })
      })
    })
  }
}));
if (Config.WORKTYPE == 'public')
    Garfield.addXnodes({ pattern: 'ahttp ?(.*)',fromMe: false, dontAddCommandList: true }, (async (message, match) => {
  if (message.reply_message) {
    var text = message.reply_message.text
    var ttinullimage = await AurorasX.ttp(text, 'https://api.flamingtext.com/logo/Design-Highlight-Animation?_variations=true&text=', '&_loc=catdynamic')
    var download = async(uri, filename, callback) => {
      await request.head(uri, async(err, res, body) => {    
        await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
      });
    };
    await download(ttinullimage.image, '/root/GARFIELD-6.0/ahttp.gif', async() => { 
      ffmpeg('/root/GARFIELD-6.0/ahttp.gif').videoFilters('chromakey=black').save('af.gif').on('end', async () => {
        ffmpeg('/root/GARFIELD-6.0/af.gif').outputOptions(["-y", "-vcodec libwebp", "-lossless 1", "-qscale 1", "-preset default", "-loop 0", "-an", "-vsync 0", "-s 600x600"]).videoFilters('scale=600:600:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=600:600:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1').save('sticker.webp').on('end', async () => {
          await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);
        })
      })
    })
  } else {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD, MessageType.text);
    var ttinullimage = await AurorasX.ttp(match[1], 'https://api.flamingtext.com/logo/Design-Highlight-Animation?_variations=true&text=', '&_loc=catdynamic')
    var download = async(uri, filename, callback) => {
      await request.head(uri, async(err, res, body) => {    
        await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
      });
    };
    await download(ttinullimage.image, '/root/GARFIELD-6.0/ahttp.gif', async() => { 
      ffmpeg('/root/GARFIELD-6.0/ahttp.gif').videoFilters('chromakey=black').save('af.gif').on('end', async () => {
        ffmpeg('/root/GARFIELD-6.0/af.gif').outputOptions(["-y", "-vcodec libwebp", "-lossless 1", "-qscale 1", "-preset default", "-loop 0", "-an", "-vsync 0", "-s 600x600"]).videoFilters('scale=600:600:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=600:600:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1').save('sticker.webp').on('end', async () => {
          await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);
        })
      })
    })
  }
}))
if (Config.WORKTYPE == 'public')
    Garfield.addXnodes({ pattern: 'pttp ?(.*)',fromMe: false, dontAddCommandList: true }, (async (message, match) => {
  if (message.reply_message) {
    var text = message.reply_message.text
    var ttinullimage = await AurorasX.ttp(text, 'https://api.flamingtext.com/logo/Design-Memories-Animation?_variations=true&text=', '&_loc=catdynamic')
    var download = async(uri, filename, callback) => {
      await request.head(uri, async(err, res, body) => {    
        await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
      });
    };
    await download(ttinullimage.image, '/root/GARFIELD-6.0/pttp.gif', async() => { 
      ffmpeg('/root/GARFIELD-6.0/pttp.gif').videoFilters('chromakey=white').save('af.gif').on('end', async () => {
        ffmpeg('/root/GARFIELD-6.0/af.gif').outputOptions(["-y", "-vcodec libwebp", "-lossless 1", "-qscale 1", "-preset default", "-loop 0", "-an", "-vsync 0", "-s 600x600"]).videoFilters('scale=600:600:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=600:600:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1').save('sticker.webp').on('end', async () => {
          await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);
        })
      })
    })
  } else {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD, MessageType.text);
    var ttinullimage = await AurorasX.ttp(match[1], 'https://api.flamingtext.com/logo/Design-Memories-Animation?_variations=true&text=', '&_loc=catdynamic')
    var download = async(uri, filename, callback) => {
      await request.head(uri, async(err, res, body) => {    
        await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
      });
    };
    await download(ttinullimage.image, '/root/GARFIELD-6.0/pttp.gif', async() => { 
      ffmpeg('/root/GARFIELD-6.0/pttp.gif').videoFilters('chromakey=white').save('af.gif').on('end', async () => {
        ffmpeg('/root/GARFIELD-6.0/af.gif').outputOptions(["-y", "-vcodec libwebp", "-lossless 1", "-qscale 1", "-preset default", "-loop 0", "-an", "-vsync 0", "-s 600x600"]).videoFilters('scale=600:600:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=600:600:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1').save('sticker.webp').on('end', async () => {
          await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);
        })
      })
    })
  }
}));