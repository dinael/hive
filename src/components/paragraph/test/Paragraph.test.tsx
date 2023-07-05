import { describe, test, expect, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { Paragraph, ParagraphProps } from '../Paragraph'

describe('Paragraph', () => {
  const defaultProps: ParagraphProps = {
    children: 'children-test',
    ellipsis: false,
    a11yLength: false,
    flat: false,
    column: null,
    className: 'className-test'
  }

  test('Paragraph renders snapshot', () => {
    const { container } = render(<Paragraph {...defaultProps} />)
    expect(container).toMatchSnapshot()
  })

  test('Paragraph renders content composition', () => {
    const { container } = render(
      <Paragraph {...defaultProps}>
        <strong>This a composition text:</strong><br />
        Lorem ipsum dolor sit amet, <abbr className="tooltip" aria-label="HyperText Markup Language">HTML</abbr> adipisicing elit. Ad <a href="javascript:void(0)">architecto</a> dolor eaque error esse
        fugiat, laboriosam <strong>Possimus  natus assumenda</strong> maiores <em>mollitia natus pariatur rem</em>  repudiandae sed tempora! Ab aliquam <sup>distinctio</sup> dolor
        <sub>doloremque</sub> unde! Lorem ipsum dolor sit amet <dfn className="tooltip" aria-label="Definition text">consectetur adipisicing elit</dfn>consectetur adipisicing elit. Dolor deserunt aperiam excepturi. <strong>Deleniti consequatur reiciendis</strong>, rerum ducimus, <ins>architecto obcaecati</ins> corrupti nulla eos optio quasi fuga veniam libero minus mollitia impedit?
        <q>Officiis repudiandae cumque non </q><code>hic eaque iusto rerum</code>, consectetur accusamus exercitationem. <samp>Laboriosam corrupti</samp>, pariatur atque <mark>consectetur eligendi</mark> exercitationem, <del>saepe nam esse</del> natus earum <big>praesentium</big> ducimus <small>tempora</small> expedita eos cum magni!
        <br />
        <br />
        <span className="text:xxl">Lorem ipsum dolor sit amet</span>, <span className="text:xl">consectetur adipisicing elit</span>. <span className="text:l">Deleniti nemo distinctio cumque sit</span> <span className="text:m">sapiente rem expedita illo tempora</span> <span className="text:m">cupiditate perspiciatis mollitia vitae nisi</span>, <span className="text:s">facilis ut architecto</span> <span className="text:xs">pariatur minus placeat iste!</span>
      </Paragraph>
    )
    expect(container).toMatchSnapshot()
  })
})
