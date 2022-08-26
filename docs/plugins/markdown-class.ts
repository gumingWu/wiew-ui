import mdContainer from 'markdown-it-container'
import MarkdownIt from 'markdown-it'

const DEFAULTCLASS = 'w-md-class'

export const markdownClass = (md: MarkdownIt) => {
  md.use(mdContainer, 'class', {
    render(tokens, idx) {
      if (tokens[idx].nesting === 1) {
        const classNameList = tokens[idx].info.trim().match(/^class\s+(.*)$/);
        const className = classNameList ? classNameList[1] : DEFAULTCLASS
        return `<div class="${className}">`
      }
      return '</div>'
    }
  })
}