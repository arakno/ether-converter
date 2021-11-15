type Props = {
    value: number
}

const Panel = ({value, ...props}: Props) => (
    <div {...props} id="panel" className="panel-converter">
      <table>
        <tr>
          <td><strong>wei</strong></td>
          <td>1 wei</td>
          <td>{value}</td>
        </tr>
        <tr>
          <td><strong>Kwei (babbage)</strong></td>
          <td>1e3 wei</td>
          <td>1,000</td>
        </tr>
        <tr>
          <td><strong>Mwei (lovelace)</strong></td>
          <td>1e6 wei</td>
          <td>1,000,000</td>
        </tr>
        <tr>
          <td><strong>Gwei (shannon)</strong></td>
          <td>1e9 wei</td>
          <td>1,000,000,000</td>
        </tr>
        <tr>
          <td><strong>microether (szabo)</strong></td>
          <td>1e12 wei</td>
          <td>1,000,000,000,000</td>
        </tr>
        <tr>
          <td><strong>milliether (finney)</strong></td>
          <td>1e15 wei</td>
          <td>1,000,000,000,000,000</td>
        </tr>
        <tr>
          <td><strong>ether</strong></td>
          <td>1e18 wei</td>
          <td>1,000,000,000,000,000,000</td>
        </tr>
      </table>
    </div>
  )

  export default Panel