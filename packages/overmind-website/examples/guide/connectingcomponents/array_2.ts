export const react = [
  {
    fileName: 'components/List.js',
    target: 'jsx',
    code: `
import React from 'react'
import app from './app'

const List = ({ app }) => (
  <ul>
    {app.state.items.map(item => 
      <li key={item.id}>{item.title}</li>
    )}
  </ul>
)

export default app.connect(List)
  `,
  },
]

export const reactTs = [
  {
    fileName: 'components/List.tsx',
    code: `
import * as React from 'react'
import app, { Connect } from './app'

const List: React.SFC<Connect> = ({ app }) => (
  <ul>
    {app.state.items.map(item => 
      <li key={item.id}>{item.title}</li>
    )}
  </ul>
)

export default app.connect(App)
  `,
  },
]

export const vue = [
  {
    fileName: 'components/List.vue (template)',
    target: 'markup',
    code: `
<ul>
  <li v-for="item in app.state.items" :key="item.id>
  {{ item.title }}
  </li>
</ul>
  `,
  },
  {
    fileName: 'components/List.vue (script)',
    code: `
import app from './app'

export default app.connect({})
`,
  },
]

export const vueTs = vue

export const angularTs = [
  {
    fileName: 'components/list.component.ts',
    code: `
import {
  Component,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from '@angular/core';
import app from '../app'

@Component({
  selector: 'app-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: \`
  <ul>
    <li *ngFor="let item of app.state.items;trackby: trackById">
      {{item.title}}
    </li>
  </ul>
  \`
})
@app.connect()
export class List {
  constructor(private cdr: ChangeDetectorRef) {}
  trackById(index, item) {
    return item.id
  }
}
  `,
  },
]