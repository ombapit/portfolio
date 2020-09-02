export default (context, inject) => {
  // const hello = msg => console.log(`Hello ${msg}!`)
  const funcs = {
    handleReduce () {
      const pixels = 50
      const lastScrollY = window.scrollY
      if (lastScrollY > pixels) {
        return 'navbar-reduce'
      } else {
        return 'navbar-trans'
      }
    },
    handleGoTop () {
      const pixels = 50
      const lastScrollY = window.scrollY
      if (lastScrollY > pixels) {
        return 'animated fadeIn'
      } else {
        return 'animated fadeOut'
      }
    },
    handleBTop () {
      const pixels = 100
      const lastScrollY = window.scrollY
      if (lastScrollY > pixels) {
        return true
      } else {
        return false
      }
    },
    dateIndo (dates) { // format date indo
      const date = new Date()
      const tahun = date.getFullYear()
      let bulan = date.getMonth()
      const tanggal = date.getDate()
      let hari = date.getDay()
      switch (hari) {
        case 0: hari = 'Minggu'; break
        case 1: hari = 'Senin'; break
        case 2: hari = 'Selasa'; break
        case 3: hari = 'Rabu'; break
        case 4: hari = 'Kamis'; break
        case 5: hari = 'Jum\'at'; break
        case 6: hari = 'Sabtu'; break
      }
      switch (bulan) {
        case 0: bulan = 'Januari'; break
        case 1: bulan = 'Februari'; break
        case 2: bulan = 'Maret'; break
        case 3: bulan = 'April'; break
        case 4: bulan = 'Mei'; break
        case 5: bulan = 'Juni'; break
        case 6: bulan = 'Juli'; break
        case 7: bulan = 'Agustus'; break
        case 8: bulan = 'September'; break
        case 9: bulan = 'Oktober'; break
        case 10: bulan = 'November'; break
        case 11: bulan = 'Desember'; break
      }
      return hari + ', ' + tanggal + ' ' + bulan + ' ' + tahun
    },
    trimHtml (html, options) {
      options = options || {}

      const limit = options.limit || 100
      const preserveTags = (typeof options.preserveTags !== 'undefined') ? options.preserveTags : true
      const wordBreak = (typeof options.wordBreak !== 'undefined') ? options.wordBreak : false
      const suffix = options.suffix || '...'
      const moreLink = options.moreLink || ''

      const arr = html.replace(/</g, '\n<')
        .replace(/>/g, '>\n')
        .replace(/\n\n/g, '\n')
        .replace(/^\n/g, '')
        .replace(/\n$/g, '')
        .split('\n')

      let sum = 0
      let row = []
      let cut = 0
      let add = 0
      let tagMatch = 0
      let tagName = 0
      const tagStack = []
      let more = false

      for (let i = 0; i < arr.length; i++) {
        row = arr[i]
        // count multiple spaces as one character
        const rowCut = row.replace(/[ ]+/g, ' ')

        if (!row.length) {
          continue
        }

        if (row[0] !== '<') {
          if (sum >= limit) {
            row = ''
          } else if ((sum + rowCut.length) >= limit) {
            cut = limit - sum

            if (row[cut - 1] === ' ') {
              while (cut) {
                cut -= 1
                if (row[cut - 1] !== ' ') {
                  break
                }
              }
            } else {
              add = row.substring(cut).split('').indexOf(' ')

              // break on halh of word
              if (!wordBreak) {
                if (add !== -1) {
                  cut += add
                } else {
                  cut = row.length
                }
              }
            }

            row = row.substring(0, cut) + suffix

            if (moreLink) {
              row += '<a href="' + moreLink + '" style="display:inline">�</a>'
            }

            sum = limit
            more = true
          } else {
            sum += rowCut.length
          }
        } else if (!preserveTags) {
          row = ''
        } else if (sum >= limit) {
          tagMatch = row.match(/[a-zA-Z]+/)
          tagName = tagMatch ? tagMatch[0] : ''

          if (tagName) {
            if (row.substring(0, 2) !== '</') {
              tagStack.push(tagName)
              row = ''
            } else {
              while (tagStack[tagStack.length - 1] !== tagName && tagStack.length) {
                tagStack.pop()
              }

              if (tagStack.length) {
                row = ''
              }
              tagStack.pop()
            }
          } else {
            row = ''
          }
        }

        arr[i] = row
      }
      return {
        html: arr.join('\n').replace(/\n/g, ''),
        more
      }
    }
  }

  inject('global', funcs)
  // For Nuxt <= 2.12, also add 👇
  context.$global = global
}
