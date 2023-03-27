import Container = require('./container.js')
import { ProcessOptions } from './postcss.js'
import Result = require('./result.js')
import Root = require('./root.js')

declare namespace Document {
  export interface DocumentProps extends Container.ContainerProps {
    nodes?: Root[]

    /**
     * Information to generate byte-to-byte equal node string as it was
     * in the origin input.
     *
     * Every parser saves its own properties.
     */
    raws?: Record<string, any>
  }

  // eslint-disable-next-line @typescript-eslint/no-shadow
  class Document extends Document_ {}
  export { Document as default }
}

/**
 * Represents a file and contains all its parsed nodes.
 *
 * **Experimental:** some aspects of this node could change within minor
 * or patch version releases.
 *
 * ```js
 * const document = htmlParser(
 *   '<html><style>a{color:black}</style><style>b{z-index:2}</style>'
 * )
 * document.type         //=> 'document'
 * document.nodes.length //=> 2
 * ```
 */
declare class Document_ extends Container.default<Root> {
  constructor(defaults?: Document.DocumentProps)

  type: 'document'
  parent: undefined

  /**
   * Returns a `Result` instance representing the document’s CSS roots.
   *
   * ```js
   * const root1 = postcss.parse(css1, { from: 'a.css' })
   * const root2 = postcss.parse(css2, { from: 'b.css' })
   * const document = postcss.document()
   * document.append(root1)
   * document.append(root2)
   * const result = document.toResult({ to: 'all.css', map: true })
   * ```
   *
   * @param opts Options.
   * @return Result with current document’s CSS.
   */
  toResult(options?: ProcessOptions): Result
}

declare class Document extends Document_ {}

export = Document
