<template>
  <div class="app-article">
    <header>
      <h4>El blog de Vue</h4>
      <aside>
        <p>Sebastian Bayo Gaspar</p>
        <p>01/10/2018 13:27:00</p>
      </aside>
    </header>
    <section>
      <img src="https://miro.medium.com/max/980/0*BRrBBgjCGAzRniV8.jpg" />
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    </section>
    <footer>
      <ul><li>Development</li><li>Vue Js</li></ul>
      <button>Leer más</button>
    </footer>
  </div>
</template>

<script>
export default {
  name: "AppArticle",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.app-article {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  background: #fff;
  max-width: 600px;
  margin: 0 auto 25px;
  header {
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: space-between;
    padding: 16px;
    h4 {
      margin: 0;
      font-size: 24px;
      color: #42b983;
      padding: 0 16px 0 0;
    }
    aside {
      text-align: right;
      p {
        margin: 0;
        font-size: 14px;
        &:last-child {
          font-size: 12px;
          margin: 4px 0 0;
        }
        &:first-child {
          font-weight: 600;
        }
      }
    }
  }
  section {
    p {
      margin: 0;
      font-size: 14px;
      text-align: left;
      padding: 16px;
    }
    img {
      max-width: 600px;
    }
  }
  footer {
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: space-between;
    padding: 6px 16px 16px;
    ul {
      margin: 0;
      padding: 0;
      list-style: none;
      li {
        font-size: 10px;
        padding: 3px 8px;
        background: #42b983;
        color: white;
        font-weight: 600;
        border-radius: 20px;
        display: inline-block;
        margin: 0px 4px 4px 0;
        text-transform: uppercase;
      }
    }
    button {
      background: transparent;
      border: none;
      font-size: 14px;
      cursor: pointer;
    }
  }
}
</style>
