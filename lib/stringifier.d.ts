import {
  Document,
  Root,
  Comment,
  Declaration,
  Builder,
  AnyNode,
  Rule,
  AtRule,
  Container
} from './postcss.js'

declare namespace Stringifier {
  // eslint-disable-next-line @typescript-eslint/no-shadow
  class Stringifier extends Stringifier_ {}
  export { Stringifier as default }
}

declare class Stringifier_ {
  builder: Builder
  constructor(builder: Builder)
  stringify(node: AnyNode, semicolon?: boolean): void
  document(node: Document): void
  root(node: Root): void
  comment(node: Comment): void
  decl(node: Declaration, semicolon?: boolean): void
  rule(node: Rule): void
  atrule(node: AtRule, semicolon?: boolean): void
  body(node: Container): void
  block(node: AnyNode, start: string): void
  raw(node: AnyNode, own: string | null, detect?: string): string
  rawSemicolon(root: Root): boolean | undefined
  rawEmptyBody(root: Root): string | undefined
  rawIndent(root: Root): string | undefined
  rawBeforeComment(root: Root, node: Comment): string | undefined
  rawBeforeDecl(root: Root, node: Declaration): string | undefined
  rawBeforeRule(root: Root): string | undefined
  rawBeforeClose(root: Root): string | undefined
  rawBeforeOpen(root: Root): string | undefined
  rawColon(root: Root): string | undefined
  beforeAfter(node: AnyNode, detect: 'before' | 'after'): string
  rawValue(node: AnyNode, prop: string): string
}

declare class Stringifier extends Stringifier_ {}

export = Stringifier
