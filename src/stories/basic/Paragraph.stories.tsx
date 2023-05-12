import React from 'react'
import { Paragraph, ParagraphProps } from '../../components/paragraph/Paragraph'

export default {
  title: 'Basic/Paragraph',
  component: Paragraph,
  tags: ['autodocs'],
  argsType: {
    children: {name: 'Text', control: 'text'},
    ellipsis: {name: 'Ellipsis', control: 'boolean'},
    a11yLength: {name: 'Text length fos a11y', control: 'text'},
    column: {name: 'Columns number', control: 'number'},
    flat: {name: 'Flat', control: 'boolean'}
  }
}

export const Default = (args: ParagraphProps) => ([
  <Paragraph {...args} />, <Paragraph {...args} />
])

export const Composition = (args: ParagraphProps) => ([
  <Paragraph {...args}>
    <strong>This a composition text:</strong><br/>
    Lorem ipsum dolor sit amet, <abbr className="tooltip" aria-label="HyperText Markup Language">HTML</abbr> adipisicing elit. Ad <a href="javascript:void(0)">architecto</a> dolor eaque error esse
    fugiat, laboriosam <strong>Possimus  natus assumenda</strong> maiores <em>mollitia natus pariatur rem</em>  repudiandae sed tempora! Ab aliquam <sup>distinctio</sup> dolor
    <sub>doloremque</sub> unde! Lorem ipsum dolor sit amet <dfn className="tooltip" aria-label="Definition text">consectetur adipisicing elit</dfn>consectetur adipisicing elit. Dolor deserunt aperiam excepturi. <strong>Deleniti consequatur reiciendis</strong>, rerum ducimus, <ins>architecto obcaecati</ins> corrupti nulla eos optio quasi fuga veniam libero minus mollitia impedit?
    <q>Officiis repudiandae cumque non </q><code>hic eaque iusto rerum</code>, consectetur accusamus exercitationem. <samp>Laboriosam corrupti</samp>, pariatur atque <mark>consectetur eligendi</mark> exercitationem, <del>saepe nam esse</del> natus earum <big>praesentium</big> ducimus <small>tempora</small> expedita eos cum magni!
    <br/>
    <br />
    <span className="text:xxl">Lorem ipsum dolor sit amet</span>, <span className="text:xl">consectetur adipisicing elit</span>. <span className="text:l">Deleniti nemo distinctio cumque sit</span> <span className="text:m">sapiente rem expedita illo tempora</span> <span className="text:m">cupiditate perspiciatis mollitia vitae nisi</span>, <span className="text:s">facilis ut architecto</span> <span className="text:xs">pariatur minus placeat iste!</span>
  </Paragraph>
])

Default.args = {
  children: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus natus assumenda beatae sapiente quis sed! Ducimus asperiores, excepturi magni eligendi magnam, natus officiis inventore, accusamus accusantium nihil nam temporibus beatae! Dolore qui molestias id accusantium',
  ellipsis: false,
  a11yLength: false,
  column: null,
  flat: false
}

Composition.args = {
  ellipsis: false,
  a11yLength: false,
  column: null,
  flat: false
}

