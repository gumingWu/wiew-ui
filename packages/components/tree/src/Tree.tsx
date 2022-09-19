import { defineComponent, toRefs, computed } from 'vue';
import { TreeProps as props } from "./props"
import type { TreePropsType, TreeItem } from "./types"
import './Tree.less'
import { IconOpen } from './IconOpen';
import { IconClose } from './IconClose'

export default defineComponent({
  name: 'WTree',
  props,
  setup(props: TreePropsType) {
    const { data } = toRefs(props)

    const openedTree = (tree) => {
      return tree.reduce((acc, item) => (
        item.open
          ? acc.concat(item, openedTree(item.children))
          : acc.concat(item)
      ), [])
    }

    const openData = computed(() => {
      return openedTree(data.value)
    })

    const toggle = (item: TreeItem) => {
      item.open = !item.open
    }

    const Indent = () => (
      <span style="display: inline-block; width: 16px; height: 16px;"></span>
    )

    const renderNode = (item: TreeItem) => (
      <div class="w-tree-node" style={{ paddingLeft: `${24 * (item.level - 1)}px` }}>
        { item.children ?
            item.open ? 
              <IconClose class="mr-xs" onClick={() => toggle(item)} /> :
                <IconOpen class="mr-xs" onClick={() => toggle(item)} /> :
                  <Indent /> }
        { item.label }
      </div>
    )

    const renderTree = (tree: TreeItem[]) => {
      return tree.map((item: TreeItem) => {
        if(!item.children) {
          return renderNode(item)
        } else {
          return (
            <>
              { renderNode(item) }
              { renderTree(item.children) }
            </>
          )
        }
      })
    }

    return () => (
      <div class="w-tree">
        { renderTree(openData.value) }
      </div>
    )
  }
})
