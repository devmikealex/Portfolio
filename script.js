setTimeout(() => {
    const z = '@'
    const b = 1 + z + 1 + '.c' + 'om'
    const a = document.querySelector(`a[href$="${b}"]`)
    const t = ['devm', 'ikea', 'lex', z, 'gma', 'il.c', 'om']
    a.href = 'mailto:' + t.join('')
}, 1493)
