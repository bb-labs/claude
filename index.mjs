
app.webgl.session(
    await io.txtread('./res/shaders/rgb/shader.vert'),
    await io.txtread('./res/shaders/rgb/shader.frag'),
)

// app.plot({ vertices: bb.tensor(await io.imread('./res/images/froot.jpg')).reshape([-1, 3]) })

app.plot({
    vertices: bb.tensor([
        // [[0.7071067690849304], [0], [-0.7071067690849304]],
        // [[-0.7071067690849304], [0], [0.7071067690849304]],

        // [[-0.40824830532073975], [+0.8164966106414795], [-0.40824830532073975]],
        // [[+0.40824830532073975], [-0.8164966106414795], [+0.40824830532073975]],

        [[0], [0], [-1]],
        [[0], [0], [1]],

        [[0], [1], [0]],
        [[0], [-1], [0]],

        [[-1], [0], [0]],
        [[1], [0], [0]],
    ]),
    colors: bb.tensor([
        // [[1], [1], [1]],
        // [[1], [1], [1]],

        // [[1], [1], [1]],
        // [[1], [1], [1]],

        [[1], [1], [1]],
        [[1], [1], [1]],

        [[1], [1], [1]],
        [[1], [1], [1]],

        [[1], [1], [1]],
        [[1], [1], [1]],
    ]),
    mode: app.webgl.context.LINES,
})

app.render()
