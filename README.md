# react-flex-layout

### Components

#### Container

- Generic container

#### PageContainer

- Component for the main page content. Header, Sidebar, Footer should be outside of this. For example:

```
<Container>
 <Header />
 <Sidebar />
 <PageContainer>
   <Row>
     <Column>...</Column>
     <Column>...</Column>
   </Row>
 </PageContainer>
 <Footer />
</Container>
```

- Also see [layout.stories.jsx](https://github.com/ryank109/react-flex-layout/blob/master/stories/layout.stories.jsx) for using `Row`, `Column` outside of the `PageContainer`

#### Row

- Flex row, simple.

###### Props

- `height` - (number) Set this to fix the height.
- `shouldGrow` - (boolean) Makes the row grow within the screen height. Default is `false`.

#### Column

- Flex column, `Column` inside `PageContainer` component will try to be responsive based on media default query breakpoints, you can overwrite this:

###### Props

- `media` - (object) Defines the media break points. Default is:

```javascript
const mediaQueries = {
  phone: 0,
  tablet: 496,
  desktop: 768,
  wideDesktop: 992,
};
```

- `padding` - (number) Column padding. Default is `10`.
- `span` - (number) Column span. Default is `1`.
- `width` - (number) Set this to fix the width.
