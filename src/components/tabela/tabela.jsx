


const Tabela =({param}) => (

    <div class="seven columns">
    <table>
    <thead>
    <tr>
        <th>
            Segunda
        </th>

	
        <th>
                Terça
            </th>
        <th>
            Quarta
        </th>
        <th>
            Quinta
        </th>
        <th>
            Sexta
        </th>
        <th>
            Sabado
        </th>
        <th>
            Domingo
        </th>
    </tr>
    </thead>
    <tbody>

    <tr>
        <td>
            9:00
        </td>
        <td>
        9:00
        </td>

        { 
		param === 'simple1' || param === 'simple2' ? (
            <td>
            9:00
            </td>
				
				):(
					null
				)

			}

        <td>
        9:00
        </td>
        <td>
        9:00
        </td>
        <td>
        9:00
        </td>
        <td>
        9:00
        </td>

    </tr>


    <tr>

        <td>
            10:00
        </td>
        <td>
             10:00
        </td>
        <td>
               10:00
        </td>
        <td>
             10:00
        </td>
       <td>
            10:00
        </td>
        <td>
            10:00
        </td>
        { 
		param === 'simple1' || param === 'simple3' ? (
            <td>
            10:00
            </td>
				
				):(
					null
				)

			}

    </tr>

    <tr>
        <td>
        11:00
        </td>
        <td>
        11:00
        </td>
        { 
		param === 'simple1'|| param === 'simple4'? (
            <td>
            11:00
            </td>
				
				):(
					null
				)

			}

        <td>
        11:00
        </td>
        <td>
        11:00
        </td>
        <td>
       
        </td>
        <td>
        11:00
        </td>

    </tr>

    <tr>
        <td>
        12:00
        </td>
        <td>
        12:00
        </td>
        <td>
        12:00
        </td>
        { 
		param === 'simple3'|| param === 'simple5'? (
            <td>
            11:00
            </td>
				
				):(
					null
				)

			}
        <td>
        12:00
        </td>
        <td>
        12:00
        </td>
        <td>
        12:00
        </td>

    </tr>
    <tr>
        <td>
        13:00
        </td>
        <td>
        13:00
        </td>
        <td>
        13:00
        </td>
        <td>
        13:00
        </td>
        <td>
        13:00
        </td>
        <td>
        13:00
        </td>
        <td>
        13:00
        </td>

    </tr>

    </tbody>
    </table>
</div>

)

export default Tabela;