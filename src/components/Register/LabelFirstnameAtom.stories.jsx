import LabelFirstnameAtom from "./LabelFirstnameAtom"

export default {
  title: 'FWK/LabelFirstnameAtom',
  component: LabelFirstnameAtom,
}

const Template = (args) => <LabelFirstnameAtom {...args}/>;

export const label = Template.bind({});
label.args={
  label:'First name:'
}