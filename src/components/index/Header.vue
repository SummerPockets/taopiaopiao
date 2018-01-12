<template>
  <div>
    <div class="header-wrapper">
      <div class="citybar-wrapper">
        <div class="address-city show-brand" id="J_City">
          <div class="city-name">北京</div>
          <div class="am-list-arrow">
            <span class="am-icon arrow vertical"></span>
          </div>
        </div>
      </div>
      <div class="movieTab-wrapper" id="J_movieTab">
        <ul>
          <li class="active" data-index="0">
            <div class="content">正在热映</div>
            <span></span>
          </li>
          <li data-index="1">
            <div class="content">即将上映</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {}
    }
  }
</script>

<style lang="stylus" scoped>
  div {
    .header-wrapper {
      background: 0 100% repeat-x;
      background-image: -webkit-gradient(linear,left top,left bottom,color-stop(.5,transparent),color-stop(.5,#e2e2e2),to(#e2e2e2));
      background-size: 100% 1px;
      background-color: #fff;
      width: 100%;
      word-spacing: -6px;
      .citybar-wrapper {
        width: 42%;
        box-sizing: border-box;
        display: inline-block;
        vertical-align: top;
        line-height: 10.4vmin;
        height: 10.4vmin;
        word-spacing: 0;
        .address-city.show-brand {
          position: relative;
          background-image: url('../../assets/logo.png');
          background-size: 25px 25px;
          background-repeat: no-repeat;
          background-position: 18px;
          padding-left: 61px;
          .city-name {
            font-size: .875rem;
            color: #928ea5;
            vertical-align: middle;
            display: inline-block;
            max-width: 18.7vmin;
            width: auto;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .am-list-arrow {
            display: inline-block;
            width: 3.2vmin;
            vertical-align: middle;
            .am-icon {
              display: block;
              width: 3.2vmin;
              height: 3.2vmin;
              overflow: hidden;
              &:before {
                content: "";
                display: block;
                width: 1.6vmin;
                height: 1.6vmin;
                margin-left: 0;
                border: 2px solid #928ea5;
                border-top: 0 none;
                border-left: 0 none;
                transform:rotate(45deg);
              }
            }
          }
        }
      }
      .movieTab-wrapper {
        text-align: center;
        box-sizing: border-box;
        display: inline-block;
        vertical-align: top;
        word-spacing: 0;
        ul {
          position: relative;
          display: -webkit-box;
          display: -webkit-flex;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-pack: end;
          -webkit-justify-content: flex-end;
          -ms-flex-pack: end;
          justify-content: flex-end;
          overflow: hidden;
          .active {
            overflow: visible;
            &>span {
              content: "";
              display: block;
              height: .8vmin;
              background-color: #ff4d64;
              position: absolute;
              bottom: 1px;
              left: 0;
              right: 0;
              width: 80%;
              margin: 0 auto;
            }
            .content {
              color: #ff4d64;
            }
          }
          li {
            padding: 0 15px;
            position: relative;
            display: block;
            float: left;
            .content {
              height: 10.7vmin;
              line-height: 10.7vmin;
              font-size: .875rem;
              position: relative;
              text-align: center;
              color: #50505a;
              text-decoration: none;
            }
          }
        }
      }
    }
  }
</style>
