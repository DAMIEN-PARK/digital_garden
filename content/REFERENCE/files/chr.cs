using UnityEngine;

public class chr : MonoBehaviour
{
    private Animator anim;
    

    private float speed = 0.0f;

    // Start is called once before the first execution of Update after the MonoBehaviour is created
    void Start()
    {
        anim = GetComponent<Animator>();
    }

    // Update is called once per frame
    void Update()
    {
        if (Input.GetKey(KeyCode.Space))
        {
            anim.SetTrigger("conv");
        }

        if (Input.GetKey(KeyCode.Alpha1))
        {
            speed += Time.deltaTime * 2.0f;
            if (speed > 1) speed = 1;
            anim.SetFloat("Movement", speed);
        }
        
        if (Input.GetKey(KeyCode.Alpha2))
        {
            speed -= Time.deltaTime * 2.0f;
            if (speed < 0) speed = 0;
            anim.SetFloat("Movement", speed);
        }

        
        float h = Input.GetAxis("Horizontal");
        float v = Input.GetAxis("Vertical");

        // x축에는 h의 값을, z축에는 v의 값을 넣은 변수 생성
        Vector3 dir = new Vector3(h, 0, v);
        dir.Normalize();
        transform.position += dir * Time.deltaTime;    
        transform.LookAt(transform.position + dir);

    }
}
