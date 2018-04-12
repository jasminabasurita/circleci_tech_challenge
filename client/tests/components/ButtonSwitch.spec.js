import React from "react"
import { expect } from "chai"
import Enzyme, { shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
const adapter = new Adapter()
Enzyme.configure({ adapter })
import ButtonSwitch from "../../components/ButtonSwitch"

describe("<ButtonSwitch />", () => {
  let wrapper
  let button
  const text = "¡Look At It Go!"
  beforeEach("create component", () => {
    wrapper = shallow(<ButtonSwitch />)
    button = wrapper.find("#toggle")
  })
  it("begins with no text displayed", () => {
    expect(wrapper.contains(text)).to.equal(false)
  })
  it('begins with the button stating "Show Text"', () => {
    expect(button.contains("Show Text")).to.equal(true)
  })
  it("should display text when clicked for the first time", () => {
    button.simulate("click")
    expect(wrapper.contains(text)).to.equal(true)
  })
  it('should change the button to say "Hide Text" when clicked', () => {
    button.simulate("click")
    expect(wrapper.find("#toggle").contains("Hide Text")).to.equal(true)
  })
  it("should hide text when clicked for the second time", () => {
    button.simulate("click")
    expect(wrapper.contains(text)).to.equal(true)
    button.simulate("click")
    expect(wrapper.contains(text)).to.equal(false)
  })
})
