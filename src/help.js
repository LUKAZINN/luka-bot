const help = (prefix) => {
	return `> *Comandos Sticker* <
command : *${prefix}sticker* or *${prefix}stiker*
desc : converter imagem / gif / vídeo em adesivo
usage : responder imagem / gif / vídeo ou enviar imagem / gif / vídeo com legenda\n
command : *${prefix}sticker nobg* or *${prefix}stiker nobg*
desc : converter imagem em adesivo removendo o fundo
usage : reply image, or send image with caption\n
command : *${prefix}toimg*
desc : converter adesivo em imagem
usage : reply sticker\n
command : *${prefix}tsticker* or *${prefix}tstiker*
desc : converter texto em adesivo
usage : *${prefix}tsticker text in here*\n
> *Meme Commands* <
command : *${prefix}meme*
desc : imagens aleatórias de meme [english]
usage : just send the command\n
command : *${prefix}memeindo*
desc : imagens aleatórias de meme [indo]
usage : apenas envie o comando\n
> *Others Commands* <
command : *${prefix}gtts*
desc : converter texto em fala / áudio
usage : *${prefix}gtts [cc] [text]*\nexemplo : *${prefix}gtts ja On2-chan*\n
command : *${prefix}loli*
desc : imagens aleatórias de loli
usage : apenas envie o comando\n
command : *${prefix}nsfwloli*
desc : imagens aleatórias de nsfw loli
usage: basta enviar o comando\n
command : *${prefix}url2img*
desc : tirar screenshots da web
usage : *${prefix}url2img [tipe] [url]*\n
command : *${prefix}simi*
desc : sua mensagem será respondida por simi
usage : *${prefix}simi yourmessage*\n
command : *${prefix}ocr*
desc : pegue o texto na foto
usage : responder imagem ou enviar imagem com legenda\n
command : *${prefix}wait*
desc : search anime with image [ What Anime Is This/That ]
usage : responder imagem ou enviar imagem com legendan\n
command : *${prefix}setprefix*
desc : substituir prefixo
usage : *${prefix}setprefix [text|optional]*\nexample : *${prefix}setprefix ?*
note : Este comando só pode ser usado pelo proprietário do bot\n
> *Grupo Comandos* <
command : *${prefix}linkgroup*
desc : pegue o link do grupo
usage : apenas envie o comando\
note : só pode ser usado quando o bot se torna admin, e quem envia o comando é admin!\n
command : *${prefix}tagall*
desc : marca todos os membros do grupo, incluindo administradores também
usage : apenas envie o comando
note : Este comando pode ser usado se você for um administrador do grupo\n
command : *${prefix}simih*
desc : ative o modo simi no grupo
usage : *${prefix}simih 1* para ativar o modo simi e *${prefix}simih 0* para desativar o modo simi
note : Este comando pode ser usado se você for um admin\n`
}

exports.help = help


